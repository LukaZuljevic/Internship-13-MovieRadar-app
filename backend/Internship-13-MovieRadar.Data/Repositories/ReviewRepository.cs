﻿﻿﻿using System.Data;
using Internship_13_MovieRadar.Data.Entities.Models;
using Internship_13_MovieRadar.Data.Interfaces;
using Dapper;


namespace Internship_13_MovieRadar.Data.Repositories
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly IDbConnection _connection;
        public ReviewRepository(DbConnectionFactory dbConnectionFactory)
        {
            _connection = dbConnectionFactory.CreateConnection();
        }

        public async Task<List<Review>> GetAllAsync()
        {
            var sql = "SELECT * FROM reviews";
            var reviews = await _connection.QueryAsync<Review>(sql);
            return reviews.ToList();
        }

        public async Task<Review?> GetByIdAsync(Guid id)
        {
            var sql = "SELECT * FROM reviews WHERE id = @Id";
            return await _connection.QueryFirstOrDefaultAsync<Review>(sql, new { Id = id });
        }

        public async Task<Review> CreateAsync(Review review)
        {
            var sql = @"
                INSERT INTO reviews (id, userid, movieid, content, rating)
                VALUES (@Id, @UserId, @MovieId, @Content, @Rating)
                RETURNING *";

            return await _connection.QueryFirstAsync<Review>(sql, review);
        }

        public async Task<bool> DeleteAsync(Guid id)
        {
            var sql = "DELETE FROM reviews WHERE id = @Id";
            var rowsAffected = await _connection.ExecuteAsync(sql, new { Id = id });
            return rowsAffected > 0;
        }

        public async Task<bool> ExistsAsync(Guid userId, Guid movieId)
        {
            var sql = "SELECT COUNT(1) FROM reviews WHERE userid = @UserId AND movieid = @MovieId";
            var count = await _connection.ExecuteScalarAsync<int>(sql, new { UserId = userId, MovieId = movieId });
            return count > 0;
        }

        public async Task<List<ReviewWithMovieAndUser>> GetMovieReviewsAsync(Guid movieId)
        {
            var sql = @"
            SELECT 
                r.Id,
                r.Content,
                r.Rating,
                r.CreatedAt,
                m.Id AS MovieId,
                m.Title AS MovieTitle,
                r.UserId,
                u.FirstName AS UserFirstName,
                u.LastName AS UserLastName
            FROM Reviews r
            JOIN Movies m ON r.MovieId = m.Id
            JOIN Users u ON r.UserId = u.Id
            WHERE r.MovieId = @MovieId
            ORDER BY r.CreatedAt DESC";

            var reviews = await _connection.QueryAsync<ReviewWithMovieAndUser>(sql, new { MovieId = movieId });

            return reviews.ToList();
        }

        public async Task<List<ReviewWithMovieAndUser>> GetUserReviewsAsync(Guid userId)
        {
            var sql = @"
                SELECT 
                    r.Id,
                    r.Content,
                    r.Rating,
                    r.CreatedAt,
                    m.Id AS MovieId,
                    m.Title AS MovieTitle
                FROM Reviews r
                JOIN Movies m ON r.MovieId = m.Id
                WHERE r.UserId = @UserId
                ORDER BY r.CreatedAt DESC";


            var reviews = await _connection.QueryAsync<ReviewWithMovieAndUser>(sql, new { UserId = userId });

            return reviews.ToList();
        }

        public async Task<Review?> GetReviewByUserIdAndMovieId(Guid userId, Guid movieId)
        {
            var sql = "SELECT * FROM reviews WHERE userid = @UserId AND movieid = @MovieId";
            return await _connection.QueryFirstOrDefaultAsync<Review>(sql, new { UserId = userId, MovieId = movieId });
        }
    }
}