using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using project.Models;
using project.Models.DataServices;

namespace project.Controllers
{
    public class LogController : Controller
    {
        private readonly UserRepo _userRepo;
        private readonly IPasswordHasher<User> _passwordHasher;

        public LogController(UserRepo userRepo, IPasswordHasher<User> passwordHasher)
        {
            _passwordHasher = passwordHasher;
            _userRepo = userRepo;
        }

        [HttpPost]
        public async Task<IActionResult> Check([FromForm] User request)
        {
            // Validate model state (assuming User class has validations)
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return validation errors
            }
            // Retrieve user from repository
            var user = await _userRepo.GetUser(request.Email);
            if (user == null)
            {
                return Unauthorized("Email not found"); // Clearer error message
            }
            // Verify password using password hasher
            var check=_passwordHasher.VerifyHashedPassword(user,user.Password,request.Password);
            if (check == 0)
            {
                return RedirectToAction("Index", "Home"); // Redirect to desired action
            }
            else
            {
                return Unauthorized("Invalid credentials");
            }
        }
    }
}