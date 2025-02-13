using Internship_13_MovieRadar.Data.Entities.Models;
using Internship_13_MovieRadar.Domain.Services;
using Internship_13_MovieRadar_Domain.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace Internship_13_MovieRadar.Presentation.Controllers
{
    [Route("api/movies")]
    [Authorize]
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

        [HttpGet("{id}")]
        public async Task<ActionResult<Movie>> GetMovie(Guid id)
        {
            var movie = await _movieService.GetMovieByIdAsync(id);
            if (movie == null) return NotFound($"Movie with ID {id} not found");

            return Ok(movie);
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<Movie>> CreateMovie([FromBody] MovieCreateDto movie)
        {
            var createdMovie = await _movieService.CreateMovieAsync(movie);
            return CreatedAtAction(nameof(GetMovie), new { id = createdMovie.Id }, createdMovie);
            
        }

        [HttpPatch("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateMovie(Guid id, [FromBody] MovieUpdateDto movie)
        {
            var updated = await _movieService.UpdateMovieAsync(id, movie);
            if (!updated) return NotFound($"Movie with ID {id} not found");

            return Ok();
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteMovie(Guid id)
        {
            var deleted = await _movieService.DeleteMovieAsync(id);
            if (!deleted) return NotFound($"Movie with ID {id} not found");

            return NoContent();
            
        }
    }
}
