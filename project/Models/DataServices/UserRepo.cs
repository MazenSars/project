using Microsoft.Data.Sqlite;

namespace project.Models.DataServices
{
    public class UserRepo
    {
        private readonly string _connectionString = "Data Source=./Dbs/sqlite-tools-win-x64-3450300/dbs/users";
        public async Task<User> GetUser(string email)
        {
            using (var connection = new SqliteConnection(_connectionString))
            {
                await connection.OpenAsync();
                using (var command = new SqliteCommand("SELECT * FROM users WHERE email = @email", connection))
                {
                    command.Parameters.AddWithValue("@email", email);
                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        if (reader.HasRows)
                        {
                            await reader.ReadAsync();
                            return new User
                            {
                                Email = email,
                                Password = (string)reader["password"],
                            };
                        }
                        else
                        {
                            throw new Exception($"User with email '{email}' not found");
                        }
                    }
                }
            }
        }
    }
}