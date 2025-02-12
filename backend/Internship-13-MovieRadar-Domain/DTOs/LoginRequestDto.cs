using System.ComponentModel.DataAnnotations;

namespace Internship_13_MovieRadar_Domain.DTOs
{
    public class LoginRequestDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string Password { get; set; } = string.Empty;

    }
}
