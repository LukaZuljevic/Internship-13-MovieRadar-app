using Internship_13_MovieRadar.Data.Interfaces;
using Internship_13_MovieRadar.Data.Entities.Models;

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

    }
}
