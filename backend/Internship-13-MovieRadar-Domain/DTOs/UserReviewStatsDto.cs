namespace Internship_13_MovieRadar_Domain.DTOs
{
    public class UserReviewStatsDto
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public int ReviewCount { get; set; }
        public double AverageRating { get; set; }
    }
}