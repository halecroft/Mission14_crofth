using Microsoft.EntityFrameworkCore;

namespace Mission14_API.Data
{
    public class MovieDbContext : DbContext //Standard Db context setup
    {
        public MovieDbContext (DbContextOptions<MovieDbContext> options) : base(options) { }

        public DbSet<Movie> Movies { get; set; }
    }
}
