﻿
namespace Internship_13_MovieRadar.Data.Entities.Models
{
    public class ReviewWithMovieAndUser
    {
        public Guid Id { get; set; }
        public string Content { get; set; } = string.Empty;
        public int Rating { get; set; }
        public DateTime CreatedAt { get; set; }
        public Guid MovieId { get; set; }
        public string MovieTitle { get; set; } = string.Empty;
        public Guid UserId { get; set; }
        public string UserFirstName { get; set; } = string.Empty;
        public string UserLastName { get; set; } = string.Empty;
    }
}