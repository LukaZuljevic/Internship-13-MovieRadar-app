using System.ComponentModel.DataAnnotations;

namespace Internship_13_MovieRadar_Domain.DTOs
{
    public class ReviewCreateDto
    {
        [Required]
        public Guid MovieId { get; set; }
        [Required]
        public Guid UserId { get; set; }
        [Required]
        public string Content { get; set; } = string.Empty; 
        [Required]
        public int Rating { get; set; }
    }
}
