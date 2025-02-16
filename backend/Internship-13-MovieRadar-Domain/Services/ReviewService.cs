using Internship_13_MovieRadar.Data.Entities.Models;
using Internship_13_MovieRadar.Data.Interfaces;
using Internship_13_MovieRadar_Domain.DTOs;

namespace Internship_13_MovieRadar.Domain.Services
{
    public class ReviewService
    {

        private readonly IReviewRepository _reviewRepository;
        private readonly IMovieRepository _movieRepository;

        public ReviewService(IReviewRepository reviewRepository, IMovieRepository movieRepository)
        {
            _reviewRepository = reviewRepository;
            _movieRepository = movieRepository;
        }


        public async Task<List<Review>> GetAllAsync()
        {
            var allReviews = await _reviewRepository.GetAllAsync();

            return allReviews;
        }

        public async Task<Review?> CreateReviewAsync(ReviewCreateDto reviewDto)
        {
            var movie = await _movieRepository.GetByIdAsync(reviewDto.MovieId);
            if (movie == null) return null;

            var exists = await _reviewRepository.ExistsAsync(reviewDto.UserId, reviewDto.MovieId);
            if (exists) return null;

            if (reviewDto.Rating < 1 || reviewDto.Rating > 5)
                throw new ArgumentException("Rating must be between 1 and 5");

            var review = new Review
            {
                Id = Guid.NewGuid(),
                UserId = reviewDto.UserId,
                MovieId = reviewDto.MovieId,
                Content = reviewDto.Content,
                Rating = reviewDto.Rating,
                CreatedAt = DateTime.UtcNow
            };

            return await _reviewRepository.CreateAsync(review);
        }

        public async Task<bool> DeleteReviewAsync(Guid id)
        {
            return await _reviewRepository.DeleteAsync(id);
        }

        public async Task<List<ReviewWithMovieAndUser>> GetMovieReviewsAsync(Guid movieId)
        {
            var movieReviews = await _reviewRepository.GetMovieReviewsAsync(movieId);

            return movieReviews.Select(movieReview => new ReviewWithMovieAndUser
            {
                Id = movieReview.Id,
                Content = movieReview.Content,
                Rating = movieReview.Rating,
                CreatedAt = movieReview.CreatedAt,
                MovieId = movieReview.MovieId,
                MovieTitle = movieReview.MovieTitle,
                UserId = movieReview.UserId,
                UserFirstName = movieReview.UserFirstName,
                UserLastName = movieReview.UserLastName,
            }).ToList();
        }

        public async Task<List<ReviewDto>> GetUserReviewsAsync(Guid userId)
        {
            var userReviews = await _reviewRepository.GetUserReviewsAsync(userId);

            return userReviews.Select(userReviews => new ReviewDto
            {
                Id = userReviews.Id,
                Content = userReviews.Content,
                Rating = userReviews.Rating,
                CreatedAt = userReviews.CreatedAt,
                MovieId = userReviews.MovieId,
                MovieTitle = userReviews.MovieTitle
            }).ToList();
        }

        public async Task<ReviewDto?> GetReviewByUserIdAndMovieIdAsync(Guid userId, Guid movieId)
        {
            var review = await _reviewRepository.GetReviewByUserIdAndMovieId(userId, movieId);

            if (review == null)
                return null;

            return new ReviewDto
            {
                Id = review.Id,
                Content = review.Content,
                Rating = review.Rating,
                CreatedAt = review.CreatedAt
            };
        }
    }
}
