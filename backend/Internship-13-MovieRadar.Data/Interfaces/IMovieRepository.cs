using Internship_13_MovieRadar.Data.Entities.Models;

namespace Internship_13_MovieRadar.Data.Interfaces
{
    public interface IMovieRepository
    {
        Task<List<Movie>> GetAllAsync();

    }
}
