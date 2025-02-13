using System.ComponentModel.DataAnnotations;

namespace Internship_13_MovieRadar_Domain.DTOs
{
    public class MovieUpdateDto
    {
        [MaxLength(200)]
        public string? Title { get; set; }

        public string? Description { get; set; }

        [MaxLength(50)]
        public string? Genre { get; set; }

        public int ReleaseYear { get; set; }
        public string? ImageUrl { get; set; }
    }
}
