namespace Internship_13_MovieRadar_Domain.DTOs
{
    public class MovieReviewDto
    {
        public Guid Id { get; set; }
        public string Content { get; set; } = string.Empty;
        public int Rating { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
