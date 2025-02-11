using System.Data;
using Internship_13_MovieRadar.Data.Entities.Models;
using Internship_13_MovieRadar.Data.Interfaces;
using Dapper;


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
    }
}
