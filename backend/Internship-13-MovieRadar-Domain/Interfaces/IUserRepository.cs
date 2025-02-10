using Internship_13_MovieRadar.Data.Entities.Models;

namespace Internship_13_MovieRadar_Domain.Interfaces
{
    public interface IUserRepository
    {
        Task<User> GetByIdAsync(int userId);

    }
}
