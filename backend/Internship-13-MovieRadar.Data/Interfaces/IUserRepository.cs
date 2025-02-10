using Internship_13_MovieRadar.Data.Entities.Models;

namespace Internship_13_MovieRadar.Data.Interfaces
{
    public interface IUserRepository
    {
        Task<List<User>> GetAllAsync();

    }
}
