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

        public async Task<User?> GetByEmailAsync(string email)
        {
            var sql = "SELECT * FROM users WHERE email = @Email";
            return await _connection.QueryFirstOrDefaultAsync<User>(sql, new { Email = email });
        }

        public async Task<User?> ValidateCredentialsAsync(string email, string password)
        {
            var sql = "SELECT * FROM users WHERE email = @Email AND password = @Password";
            return await _connection.QueryFirstOrDefaultAsync<User>(
                sql,
                new { Email = email, Password = password }
            );
        }

        public async Task<User> CreateAsync(User user)
        {
            var insertSql = @"INSERT INTO users (id, firstname, lastname, email, password, isadmin) 
                      VALUES (@Id, @FirstName, @LastName, @Email, @Password, @IsAdmin)";
            await _connection.ExecuteAsync(insertSql, user);

            var selectSql = "SELECT * FROM users WHERE email = @Email";
            return await _connection.QueryFirstAsync<User>(selectSql, new { user.Email });
        }
    }
}
