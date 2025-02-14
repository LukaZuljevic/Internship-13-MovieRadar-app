using Internship_13_MovieRadar.Data.Entities.Models;

namespace Internship_13_MovieRadar.Data.Interfaces
{
    public interface IUserRepository
    {
        Task<List<User>> GetAllAsync();
        Task<User?> GetByEmailAsync(string email);
        Task<User?> ValidateCredentialsAsync(string email, string password);
        Task<User> CreateAsync(User user);
        Task<List<UserWithStats>> GetUsersReviewStatsAsync();
        Task<User?> GetUserByIdAsync(Guid useId);
    }
}
