using Internship_13_MovieRadar.Data.Interfaces;
using Internship_13_MovieRadar.Data.Entities.Models;
using Internship_13_MovieRadar_Domain.DTOs;
using System.Text;
using System.Security.Cryptography;

namespace Internship_13_MovieRadar.Domain.Services
{
    public class UserService
    {

        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository) 
        {
            _userRepository = userRepository;
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
            }).ToList();

        }

        public async Task<LoginResponseDto?> LoginAsync(LoginRequestDto request)
        {
            var user = await _userRepository.ValidateCredentialsAsync(request.Email, HashPassword(request.Password));
            if (user == null) return null;

            var secretKey = GenerateSecretKey();

            return new LoginResponseDto
            {
                UserId = user.Id,
                SecretKey = secretKey
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
                IsAdmin = false
            };

            var createdUser = await _userRepository.CreateAsync(user);
            return new RegisterResponseDto
            {
                UserId = createdUser.Id
            };
        }

        private string GenerateSecretKey()
        {
            return Guid.NewGuid().ToString();
        }

        private string HashPassword(string password)
        {
            using var sha256 = SHA256.Create();
            var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
            return Convert.ToBase64String(hashedBytes);
        }

    }
}
