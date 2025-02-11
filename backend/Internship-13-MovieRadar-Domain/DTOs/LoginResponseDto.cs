namespace Internship_13_MovieRadar_Domain.DTOs
{
    public class LoginResponseDto
    {
        public Guid UserId { get; set; }
        public string SecretKey { get; set; } = string.Empty;
    }
}
