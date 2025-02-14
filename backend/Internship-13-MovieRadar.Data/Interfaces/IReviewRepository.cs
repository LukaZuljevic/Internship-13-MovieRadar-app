using Internship_13_MovieRadar.Data.Entities.Models;

namespace Internship_13_MovieRadar.Data.Interfaces
{
    public interface IReviewRepository
    {
        Task<List<Review>> GetAllAsync();
        Task<Review?> GetByIdAsync(Guid id);
        Task<Review> CreateAsync(Review review);
        Task<bool> DeleteAsync(Guid id);
        Task<bool> ExistsAsync(Guid userId, Guid movieId);
        Task<List<Review>> GetMovieReviewsAsync(Guid movieId);
        Task<List<Review>> GetUserReviewsAsync(Guid userId);
    }
}
