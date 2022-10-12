using HealthCheckAPI.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace HealthCheckAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext() : base()
        {
        }
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }
        public DbSet<City> Cities => Set<City>();
        public DbSet<Country> Countries => Set<Country>();
    }
}
