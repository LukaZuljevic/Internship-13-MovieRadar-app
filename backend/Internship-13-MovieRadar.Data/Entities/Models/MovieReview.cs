namespace Internship_13_MovieRadar.Data.Entities.Models
{
    public class MovieReview
    {
        public Guid Id { get; set; }
        public string Content { get; set; } = string.Empty;
        public int Rating { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
