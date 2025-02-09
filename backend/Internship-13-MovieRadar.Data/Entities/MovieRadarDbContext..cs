using Internship_13_MovieRadar.Data.Entities.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Internship_13_MovieRadar.Data.Seeds;
using Microsoft.Extensions.Configuration;

namespace Internship_13_MovieRadar.Data.Entities
{
    public class MovieRadarDbContext : DbContext
    {
        public MovieRadarDbContext(DbContextOptions<MovieRadarDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Review> Reviews { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Email).IsRequired();
                entity.HasIndex(e => e.Email).IsUnique();
                entity.Property(e => e.Password).IsRequired();
                entity.Property(e => e.FirstName).IsRequired();
                entity.Property(e => e.LastName).IsRequired();
                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .IsRequired();

                entity.HasMany(e => e.Reviews)
                    .WithOne(e => e.User)
                    .HasForeignKey(e => e.UserId)
                    .OnDelete(DeleteBehavior.Cascade);
            });

            modelBuilder.Entity<Movie>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Title).IsRequired();
                entity.Property(e => e.Description).IsRequired();
                entity.Property(e => e.Genre).IsRequired();
                entity.Property(e => e.ReleaseYear).IsRequired();
                entity.Property(e => e.ImageUrl);
                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .IsRequired();
                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("timestamp without time zone");

                entity.HasMany(e => e.Reviews)
                    .WithOne(e => e.Movie)
                    .HasForeignKey(e => e.MovieId)
                    .OnDelete(DeleteBehavior.Cascade);
            });

            modelBuilder.Entity<Review>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Content).IsRequired();
                entity.Property(e => e.Rating)
                    .IsRequired()
                    .HasAnnotation("Range", new[] { 1, 5 });
                entity.Property(e => e.CreatedAt)
                    .HasColumnType("timestamp without time zone")
                    .IsRequired();

                entity.HasIndex(e => new { e.UserId, e.MovieId }).IsUnique();
            });

            DatabaseSeeder.Seed(modelBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.ConfigureWarnings(warnings =>
                warnings.Ignore(RelationalEventId.PendingModelChangesWarning));
        }

        public class MovieRadarDbContextFactory : IDesignTimeDbContextFactory<MovieRadarDbContext>
        {
            public MovieRadarDbContext CreateDbContext(string[] args)
            {
                IConfiguration configuration = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json")
                    .Build();

                var connectionString = configuration.GetConnectionString("DefaultConnection");

                var optionsBuilder = new DbContextOptionsBuilder<MovieRadarDbContext>();
                optionsBuilder.UseNpgsql(connectionString, options =>
                {
                    options.EnableRetryOnFailure(
                        maxRetryCount: 5,
                        maxRetryDelay: TimeSpan.FromSeconds(30),
                        errorCodesToAdd: null
                    );
                });

                return new MovieRadarDbContext(optionsBuilder.Options);
            }
        }
    }
}
