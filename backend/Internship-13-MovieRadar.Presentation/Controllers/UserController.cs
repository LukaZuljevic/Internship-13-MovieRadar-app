using Internship_13_MovieRadar.Domain.Services;
using Microsoft.AspNetCore.Mvc;


namespace Internship_13_MovieRadar.Presentation.Controllers
{
    [Route("api/movie-radar")]
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
            try
            {
                var users = await _userService.GetAllAsync();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }
    }
}
