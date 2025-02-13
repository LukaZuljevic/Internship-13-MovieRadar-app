using System.ComponentModel.DataAnnotations;

namespace Internship_13_MovieRadar_Domain.DTOs
{
    public class MovieCreateDto
    {
        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [Required]
        public string Description { get; set; } = string.Empty;

        [Required]
        [MaxLength(50)]
        public string Genre { get; set; } = string.Empty;

        [Required]
        public int ReleaseYear { get; set; }
        public string ImageUrl { get; set; } = string.Empty;
    }
}
