using Internship_13_MovieRadar.Domain.Services;
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
    }
}