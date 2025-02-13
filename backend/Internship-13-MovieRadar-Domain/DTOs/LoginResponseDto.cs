namespace Internship_13_MovieRadar_Domain.DTOs
{
    public class LoginResponseDto
    {
        public Guid UserId { get; set; }
        public string JwtToken { get; set; } = string.Empty;
    }
}
