namespace Internship_13_MovieRadar.Data.Entities.Models
{
    public class Movie
    {
        public Movie()
        {
            Reviews = new List<Review>();
        }

        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Genre { get; set; } = string.Empty;
        public int ReleaseYear { get; set; }
        public string ImageUrl { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime? UpdatedAt { get; set; }

        public ICollection<Review> Reviews { get; set; }
    }
}
