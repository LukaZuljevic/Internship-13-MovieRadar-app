using System.Data;
using Internship_13_MovieRadar.Data.Entities.Models;
using Internship_13_MovieRadar.Data.Interfaces;
using Dapper;
using System.Text;


namespace Internship_13_MovieRadar.Data.Repositories
{
    public class MovieRepository : IMovieRepository
    {
        private readonly IDbConnection _connection;
        public MovieRepository(DbConnectionFactory dbConnectionFactory)
        {
            _connection = dbConnectionFactory.CreateConnection();
        }

        public async Task<List<Movie>> GetAllAsync()
        {
            var sql = "SELECT * FROM movies";
            var movies = await _connection.QueryAsync<Movie>(sql);
            return movies.ToList();
        }

        public async Task<Movie?> GetByIdAsync(Guid id)
        {
            var sql = "SELECT * FROM movies WHERE id = @Id";
            return await _connection.QueryFirstOrDefaultAsync<Movie>(sql, new { Id = id });
        }

        public async Task<List<Movie>> FilterMoviesAsync(
            string? genre = null,
            int? releaseYear = null,
            double? minRating = null,
            string? sortBy = null,
            bool ascending = true)
        {
            var sql = new StringBuilder("SELECT m.*, COALESCE(AVG(r.rating), 0) as average_rating " +
                                      "FROM movies m " +
                                      "LEFT JOIN reviews r ON m.id = r.movieid ");

            var conditions = new List<string>();
            var parameters = new DynamicParameters();

            if (!string.IsNullOrEmpty(genre))
            {
                conditions.Add("m.genre = @Genre");
                parameters.Add("Genre", genre);
            }

            if (releaseYear.HasValue)
            {
                conditions.Add("m.releaseyear = @ReleaseYear");
                parameters.Add("ReleaseYear", releaseYear.Value);
            }

            sql.Append("GROUP BY m.id ");

            if (minRating.HasValue)
            {
                sql.Append("HAVING COALESCE(AVG(r.rating), 0) >= @MinRating ");
                parameters.Add("MinRating", minRating.Value);
            }

            if (!string.IsNullOrEmpty(sortBy))
            {
                var orderBy = sortBy.ToLower() switch
                {
                    "title" => "m.title",
                    "releaseYear" => "m.releaseyear",
                    "rating" => "average_rating",
                    "genre" => "m.genre",
                    _ => "m.createdat"
                };

                sql.Append($"ORDER BY {orderBy} {(ascending ? "ASC" : "DESC")}");
            }

            if (conditions.Any())
            {
                sql.Insert(sql.ToString().IndexOf("GROUP BY"),
                    $"WHERE {string.Join(" AND ", conditions)} ");
            }

            var movies = await _connection.QueryAsync<Movie>(sql.ToString(), parameters);
            return movies.ToList();
        }

        public async Task<Movie> CreateAsync(Movie movie)
        {
            var sql = @"
                INSERT INTO movies (id, title, description, genre, releaseyear, imageurl, createdat)
                VALUES (@Id, @Title, @Description, @Genre, @ReleaseYear, @ImageUrl, @CreatedAt)
                RETURNING *";

            return await _connection.QueryFirstAsync<Movie>(sql, movie);
        }

        public async Task<bool> UpdateAsync(Movie movie)
        {
            var sql = @"
                UPDATE movies 
                SET title = @Title,
                    description = @Description,
                    genre = @Genre,
                    releaseyear = @ReleaseYear,
                    imageurl = @ImageUrl,
                    updatedat = @UpdatedAt
                WHERE id = @Id";

            var rowsAffected = await _connection.ExecuteAsync(sql, movie);
            return rowsAffected > 0;
        }

        public async Task<bool> DeleteAsync(Guid id)
        {
            var sql = "DELETE FROM movies WHERE id = @Id";
            var rowsAffected = await _connection.ExecuteAsync(sql, new { Id = id });
            return rowsAffected > 0;
        }
    }
}
