using Internship_13_MovieRadar.Domain.Services;
using Microsoft.AspNetCore.Mvc;


namespace Internship_13_MovieRadar.Presentation.Controllers
{
    [Route("api/movies")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly MovieService _movieService;

        public MovieController(MovieService movieService)
        {
            _movieService = movieService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMovies()
        {
            var movies = await _movieService.GetAllAsync();

            if (movies == null) return NotFound();

            return Ok(movies);
        }
    }
}
