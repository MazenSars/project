using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using project.Models;
using System.Security.Cryptography;
using Microsoft.Data.Sqlite;

namespace project.Controllers
{
    public class SignupController : Controller
    {
        private readonly IPasswordHasher<User> _passwordHasher;
        private readonly string _connectionString = "Data Source=./Dbs/sqlite-tools-win-x64-3450300/dbs/users";
        public SignupController(IPasswordHasher<User> passwordHasher)
        {
            _passwordHasher = passwordHasher;
        }
        public string Salt()
        {
            // Adjust the salt size based on your security needs (typically 16-32 bytes)
            var saltSize = 16;
            // Use a cryptographically secure random number generator (RNG)
            var randomNumberGenerator = RandomNumberGenerator.Create();
            // Generate random bytes for the salt
            var saltBytes = new byte[saltSize];
            randomNumberGenerator.GetBytes(saltBytes);
            // Convert bytes to a base64 encoded string (common for storage)
            return Convert.ToBase64String(saltBytes);
        }
        [HttpPost]
        public async Task<IActionResult> StoreUser([FromForm] User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var email = user.Email;
            var password = user.Password;
            password = password + Salt();
            _passwordHasher.HashPassword(user, password);
            using (var connection = new SqliteConnection(_connectionString))
            {
                await connection.OpenAsync();
                using (var command = new SqliteCommand("insert into users (email, password) values (@email,@password)", connection))
                {
                    command.Parameters.AddWithValue("@email", email);
                    command.Parameters.AddWithValue("@password", password);
                    command.ExecuteNonQuery();
                    return RedirectToAction("Index", "Home");
                }
            }
        }
    }
}