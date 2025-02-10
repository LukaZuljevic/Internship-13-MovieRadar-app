using Internship_13_MovieRadar.Data.Entities.Models;
using Internship_13_MovieRadar.Data.Interfaces;

namespace Internship_13_MovieRadar.Domain.Services
{
    public class ReviewService
    {

        private readonly IReviewRepository _reviewRepository;
        public ReviewService(IReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }


        public async Task<List<Review>> GetAllAsync()
        {
            var allReviews = await _reviewRepository.GetAllAsync();

            return allReviews;
        }
    }
}
