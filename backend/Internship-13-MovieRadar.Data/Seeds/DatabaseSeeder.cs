using Internship_13_MovieRadar.Data.Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace Internship_13_MovieRadar.Data.Seeds
{
    public static class DatabaseSeeder
    {
        public static void Seed(ModelBuilder modelBuilder)
        {
            var adminId = Guid.NewGuid();
            var johnId = Guid.NewGuid();
            var janeId = Guid.NewGuid();
            var markId = Guid.NewGuid();

            var inceptionId = Guid.NewGuid();
            var shawshankId = Guid.NewGuid();
            var darkKnightId = Guid.NewGuid();

            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = adminId,
                    Email = "admin@movieradar.com",
                    Password = "oQnjaUetVt4dyhzEnw74rJrZp7GqDfQfs8TLc8H/Aeo=", // Password123!
                    FirstName = "Admin",
                    LastName = "User",
                    IsAdmin = true,
                    
                },
                new User
                {
                    Id = johnId,
                    Email = "john.doe@gmail.com",
                    Password = "qErJCXpDKt4m+zyvP95FuukV3gEGrD1so8mCtoZtMcE=", // MyPassw0rd!
                    FirstName = "John",
                    LastName = "Doe",
                    IsAdmin = false,
                    
                },
                new User
                {
                    Id = janeId,
                    Email = "jane.smith@gmail.com",
                    Password = "qFYB54kbXvV24+kUz/cJy2WVfl9ifGPtY5t3plLC1YY=", // SecureP@ssw0rd
                    FirstName = "Jane",
                    LastName = "Smith",
                    IsAdmin = false,
                    
                },
                new User
                {
                    Id = markId,
                    Email = "mark.wilson@gmail.com",
                    Password = "qFYB54kbXvV24+kUz/cJy2WVfl9ifGPtY5t3plLC1YY=", // SecureP@ssw0rd
                    FirstName = "Mark",
                    LastName = "Wilson",
                    IsAdmin = false,
                    
                }
            );

            modelBuilder.Entity<Movie>().HasData(
                new Movie
                {
                    Id = inceptionId,
                    Title = "Inception",
                    Description = "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
                    Genre = "Sci-Fi",
                    ReleaseYear = 2010,
                    
                },
                new Movie
                {
                    Id = shawshankId,
                    Title = "The Shawshank Redemption",
                    Description = "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                    Genre = "Drama",
                    ReleaseYear = 1994,
                    
                },
                new Movie
                {
                    Id = darkKnightId,
                    Title = "The Dark Knight",
                    Description = "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                    Genre = "Action",
                    ReleaseYear = 2008,
                    
                }
            );

            modelBuilder.Entity<Review>().HasData(
                new Review
                {
                    Id = Guid.NewGuid(),
                    UserId = johnId,
                    MovieId = inceptionId,
                    Content = "Complex plot but very entertaining. The visual effects are stunning.",
                    Rating = 4,
                    
                },
                new Review
                {
                    Id = Guid.NewGuid(),
                    UserId = johnId,
                    MovieId = shawshankId,
                    Content = "A timeless classic. Morgan Freeman's performance is outstanding.",
                    Rating = 5,
                    
                },
                new Review
                {
                    Id = Guid.NewGuid(),
                    UserId = janeId,
                    MovieId = shawshankId,
                    Content = "One of the greatest movies ever made. The story is deeply moving.",
                    Rating = 5,
                    
                },
                new Review
                {
                    Id = Guid.NewGuid(),
                    UserId = janeId,
                    MovieId = darkKnightId,
                    Content = "Heath Ledger's Joker is unforgettable. A perfect superhero movie.",
                    Rating = 5,
                    
                },
                new Review
                {
                    Id = Guid.NewGuid(),
                    UserId = markId,
                    MovieId = darkKnightId,
                    Content = "Brilliant direction by Nolan. The pacing and action scenes are incredible.",
                    Rating = 4,
                    
                },
                new Review
                {
                    Id = Guid.NewGuid(),
                    UserId = markId,
                    MovieId = inceptionId,
                    Content = "The ending left me questioning everything. Great soundtrack too.",
                    Rating = 4,
                    
                }
            );
        }
    }
}