using Internship_13_MovieRadar.Data;
using Internship_13_MovieRadar.Data.Interfaces;
using Internship_13_MovieRadar.Data.Repositories;
using Internship_13_MovieRadar.Domain.Services;

class Program
{
    static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        var configuration = new ConfigurationBuilder()
            .SetBasePath(AppContext.BaseDirectory)
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .Build();

        builder.Services.AddScoped<DbConnectionFactory>(provider => new DbConnectionFactory(configuration));

        builder.Services.AddScoped<IUserRepository, UserRepository>();
        builder.Services.AddScoped<UserService>();

        builder.Services.AddScoped<IMovieRepository, MovieRepository>();
        builder.Services.AddScoped<MovieService>();

        builder.Services.AddScoped<IReviewRepository, ReviewRepository>();
        builder.Services.AddScoped<ReviewService>();

        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        var app = builder.Build();

        app.UseHttpsRedirection();
        app.UseSwagger();
        app.UseSwaggerUI(c =>
        {
            c.SwaggerEndpoint("/swagger/v1/swagger.json", "MovieRadar API V1");
        });
        app.UseAuthorization();
        app.MapControllers(); 

        app.Run();
    }
}
