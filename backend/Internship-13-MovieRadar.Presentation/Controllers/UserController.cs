using Internship_13_MovieRadar.Domain.Services;
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
    }
}
