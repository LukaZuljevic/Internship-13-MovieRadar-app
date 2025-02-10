using System.Data;
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
    }
}