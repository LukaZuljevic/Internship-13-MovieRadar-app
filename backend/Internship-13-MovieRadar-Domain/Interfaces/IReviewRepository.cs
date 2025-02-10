using Internship_13_MovieRadar.Data.Entities.Models;

namespace Internship_13_MovieRadar_Domain.Interfaces
{
    public interface IReviewRepository
    {
        Task<Review> GetByIdAsync(int reviewId);
    }
}
