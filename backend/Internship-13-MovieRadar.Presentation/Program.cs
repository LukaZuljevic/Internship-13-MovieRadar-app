using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Internship_13_MovieRadar.Data;

class Program
{
    static void Main(string[] args)
    {
        var serviceProvider = new ServiceCollection()
            .AddSingleton<IConfiguration>(new ConfigurationBuilder()
                .SetBasePath(AppContext.BaseDirectory)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .Build())
            .AddSingleton<DbConnectionFactory>()
            .BuildServiceProvider();

        var dbConnectionFactory = serviceProvider.GetService<DbConnectionFactory>();

        try
        {
            using var connection = dbConnectionFactory.CreateConnection();
            connection.Open();
            Console.WriteLine("Database Connection Successful!");
        }
        catch (Exception ex)
        {
            Console.WriteLine($" Database Connection Failed: {ex.Message}");
        }
    }
}