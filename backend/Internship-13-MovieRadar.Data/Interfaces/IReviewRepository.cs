﻿﻿using Internship_13_MovieRadar.Data.Entities.Models;

namespace Internship_13_MovieRadar.Data.Interfaces
{
    public interface IReviewRepository
    {
        Task<List<Review>> GetAllAsync();
        Task<Review?> GetByIdAsync(Guid id);
        Task<Review> CreateAsync(Review review);
        Task<bool> DeleteAsync(Guid id);
        Task<bool> ExistsAsync(Guid userId, Guid movieId);
        Task<List<ReviewWithMovie>> GetMovieReviewsAsync(Guid movieId);
        Task<List<ReviewWithMovie>> GetUserReviewsAsync(Guid userId);
        Task<Review?> GetReviewByUserIdAndMovieId(Guid userId, Guid movieId);
    }
}