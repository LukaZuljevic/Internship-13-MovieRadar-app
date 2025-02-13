using Internship_13_MovieRadar.Data.Entities.Models;
using Internship_13_MovieRadar.Data.Interfaces;
using Internship_13_MovieRadar_Domain.DTOs;

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

        public async Task<Movie?> GetMovieByIdAsync(Guid id)
        {
            var movie = await _movieRepository.GetByIdAsync(id);
            if (movie == null) return null;

            return movie;
        }

        public async Task<List<Movie>> FilterMoviesAsync(
            string? genre = null,
            int? releaseYear = null,
            double? minRating = null,
            string? sortBy = null,
            bool ascending = true)
        {
            return await _movieRepository.FilterMoviesAsync(genre, releaseYear, minRating, sortBy, ascending);
        }

        public async Task<Movie> CreateMovieAsync(MovieCreateDto movieDto)
        {
            var movie = new Movie
            {
                Id = Guid.NewGuid(),
                Title = movieDto.Title,
                Description = movieDto.Description,
                Genre = movieDto.Genre,
                ReleaseYear = movieDto.ReleaseYear,
                ImageUrl = movieDto.ImageUrl,
                CreatedAt = DateTime.UtcNow
            };

            return await _movieRepository.CreateAsync(movie);
        }

        public async Task<bool> UpdateMovieAsync(Guid id, MovieUpdateDto movieDto)
        {
            var existingMovie = await _movieRepository.GetByIdAsync(id);
            if (existingMovie == null) return false;

            if (movieDto.Title != null)
                existingMovie.Title = movieDto.Title;

            if (movieDto.Description != null)
                existingMovie.Description = movieDto.Description;

            if (movieDto.Genre != null)
                existingMovie.Genre = movieDto.Genre;

            if (movieDto.ReleaseYear > 1888 && movieDto.ReleaseYear < 2100)
                existingMovie.ReleaseYear = movieDto.ReleaseYear;

            if (movieDto.ImageUrl != null)
                existingMovie.ImageUrl = movieDto.ImageUrl;

            existingMovie.UpdatedAt = DateTime.UtcNow;

            return await _movieRepository.UpdateAsync(existingMovie);
        }

        public async Task<bool> DeleteMovieAsync(Guid id)
        {
            return await _movieRepository.DeleteAsync(id);
        }
    }
}
