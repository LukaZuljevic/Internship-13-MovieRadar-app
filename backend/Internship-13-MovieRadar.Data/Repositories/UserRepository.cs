using System.Data;
using Internship_13_MovieRadar.Data.Entities.Models;
using Internship_13_MovieRadar.Data.Interfaces;
using Dapper;


namespace Internship_13_MovieRadar.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly IDbConnection _connection;
        public UserRepository(DbConnectionFactory dbConnectionFactory) 
        { 
            _connection = dbConnectionFactory.CreateConnection();
        }

        public async Task<List<User>> GetAllAsync()
        {
            var sql = "SELECT * FROM users";
            var users = await _connection.QueryAsync<User>(sql);
            return users.ToList();
        }
    }
}
