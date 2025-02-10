namespace Internship_13_MovieRadar.Data.Entities.Models
{
    public class User
    {
        public User()
        {
            Reviews = new List<Review>();
        }

        public Guid Id { get; set; }
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public bool IsAdmin { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public ICollection<Review> Reviews { get; set; }
    }
}
