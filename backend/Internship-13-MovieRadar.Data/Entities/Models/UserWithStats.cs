
namespace Internship_13_MovieRadar.Data.Entities.Models
{
    public class UserWithStats
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public int ReviewCount { get; set; }
        public double AverageRating { get; set; }
    }
}