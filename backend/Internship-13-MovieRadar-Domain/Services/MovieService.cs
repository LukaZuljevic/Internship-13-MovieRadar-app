using Internship_13_MovieRadar.Data.Entities.Models;
using Internship_13_MovieRadar.Data.Interfaces;

namespace Internship_13_MovieRadar.Domain.Services
{
    public class MovieService
    {

        private readonly IMovieRepository _movieRepository;
        public MovieService(IMovieRepository movieRepository)
        {
            _movieRepository = movieRepository;
        }


        public async Task<List<Movie>> GetAllAsync()
        {
            var allMovies = await _movieRepository.GetAllAsync();

            return allMovies;
        }
    }
}
