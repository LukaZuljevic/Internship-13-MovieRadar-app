using Internship_13_MovieRadar.Data.Entities.Models;

namespace Internship_13_MovieRadar.Data.Interfaces
{
    public interface IMovieRepository
    {
        Task<List<Movie>> GetAllAsync();
        Task<Movie?> GetByIdAsync(Guid id);
        Task<List<Movie>> FilterMoviesAsync(
            string? genre = null,
            int? releaseYear = null,
            double? minRating = null,
            string? sortBy = null,
            bool ascending = true);
        Task<Movie> CreateAsync(Movie movie);
        Task<bool> UpdateAsync(Movie movie);
        Task<bool> DeleteAsync(Guid id);
    }
}
