using Internship_13_MovieRadar.Data.Interfaces;
using Internship_13_MovieRadar.Data.Entities.Models;
using Internship_13_MovieRadar_Domain.DTOs;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using Microsoft.Extensions.Configuration;
using System.Text;


namespace Internship_13_MovieRadar.Domain.Services
{
    public class UserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _configuration;  

        public UserService(IUserRepository userRepository, IConfiguration configuration)
        {
            _userRepository = userRepository;
            _configuration = configuration;
        }

        public async Task<List<User>> GetAllAsync()
        {
            var allUsers = await _userRepository.GetAllAsync();

            return allUsers.Select(user => new User
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                IsAdmin = user.IsAdmin
            }).ToList();
        }

        public async Task<User?> GetUserByIdAsync(Guid userId)
        {
            var user = await _userRepository.GetUserByIdAsync(userId);

            if (user == null) return null;

            return new User
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                IsAdmin = user.IsAdmin
            };
        }
        public async Task<LoginResponseDto?> LoginAsync(LoginRequestDto request)
        {
            var user = await _userRepository.GetByEmailAsync(request.Email);
            if (user == null || !VerifyPassword(request.Password, user.Password))
                return null;

            var JwtToken = GenerateJwtToken(user);

            return new LoginResponseDto
            {
                UserId = user.Id,
                JwtToken = JwtToken
            };
        }

        public async Task<RegisterResponseDto?> RegisterAsync(RegisterRequestDto request)
        {
            if (await _userRepository.GetByEmailAsync(request.Email) != null) return null;

            var passwordHash = HashPassword(request.Password);

            var user = new User
            {
                Id = Guid.NewGuid(),
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Email,
                Password = passwordHash,
                IsAdmin = request.IsAdmin 
            };

            var createdUser = await _userRepository.CreateAsync(user);
            return new RegisterResponseDto
            {
                UserId = createdUser.Id
            };
        }

        public async Task<List<UserReviewStatsDto>> GetUsersReviewStatsAsync()
        {
            var usersWithStats = await _userRepository.GetUsersReviewStatsAsync();
            return usersWithStats.Select(stats => new UserReviewStatsDto
            {
                FirstName = stats.FirstName,
                LastName = stats.LastName,
                ReviewCount = stats.ReviewCount,
                AverageRating = stats.AverageRating
            }).ToList();
        }

        private string GenerateJwtToken(User user)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Secret"]));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim("role", user.IsAdmin ? "Admin" : "User"),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.UtcNow.AddMinutes(30),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private string HashPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }

        private bool VerifyPassword(string enteredPassword, string storedHash)
        {
            return BCrypt.Net.BCrypt.Verify(enteredPassword, storedHash);
        }
    }
}
