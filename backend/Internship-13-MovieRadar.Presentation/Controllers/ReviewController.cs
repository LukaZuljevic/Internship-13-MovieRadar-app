using Internship_13_MovieRadar.Domain.Services;
using Internship_13_MovieRadar_Domain.DTOs;
using Microsoft.AspNetCore.Mvc;


namespace Internship_13_MovieRadar.Presentation.Controllers
{
    [Route("api/reviews")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly ReviewService _reviewService;

        public ReviewController(ReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMovies()
        {
            var movies = await _reviewService.GetAllAsync();

            if (movies == null) return NotFound();

            return Ok(movies);
        }

        [HttpPost]
        public async Task<IActionResult> CreateReview([FromBody] ReviewCreateDto review)
        {
            var createdMovie = await _reviewService.CreateReviewAsync(review);
            if (createdMovie == null) return BadRequest();
            return Created();

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReview(Guid id)
        {
            var deleted = await _reviewService.DeleteReviewAsync(id);
            if (!deleted) return NotFound($"Movie with ID {id} not found");

            return NoContent();

        }

        [HttpGet("movie/{movieId}")]
        public async Task<IActionResult> GetMovieReviews(Guid movieId)
        {
            var reviews = await _reviewService.GetMovieReviewsAsync(movieId);
            if (reviews == null || !reviews.Any())
                return NoContent();

            return Ok(reviews);
        }

        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetUserReviews(Guid userId)
        {
            var reviews = await _reviewService.GetUserReviewsAsync(userId);
            if (reviews == null || !reviews.Any())
                return NoContent();

            return Ok(reviews);
        }

        [HttpGet("user/{userId}/movie/{movieId}")]

        public async Task<IActionResult> GetReviewByUserIdAndMovieId(Guid userId, Guid movieId)
        {
            var review = await _reviewService.GetReviewByUserIdAndMovieIdAsync(userId, movieId);
            if (review == null)
                return NoContent();
            
            return Ok(review);
        }
    }
}