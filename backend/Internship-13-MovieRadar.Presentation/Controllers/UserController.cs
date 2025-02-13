using Internship_13_MovieRadar.Domain.Services;
using Internship_13_MovieRadar_Domain.DTOs;
using Microsoft.AspNetCore.Mvc;


namespace Internship_13_MovieRadar.Presentation.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {         
            var users = await _userService.GetAllAsync();

            if(users == null) return NotFound();

            return Ok(users);      
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestDto request)
        {
            var result = await _userService.RegisterAsync(request);
            if (result == null) return BadRequest("Email already exists");

            return Ok(result);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDto request)
        {
            var result = await _userService.LoginAsync(request);

            if (result == null) return Unauthorized("Invalid credentials");

            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.Lax, 
                Expires = DateTime.UtcNow.AddMinutes(30)
            };

            Response.Cookies.Append("secretKey", result.JwtToken, cookieOptions);

            return Ok();
        }

        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("secretKey");
            return Ok();
        }
    }
}
