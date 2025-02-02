using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using back_pp_001.Models;

namespace back_pp_001.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Users> personajes { get; set; }
        public DbSet<Coins> tipo_monedas { get; set; }
        public DbSet<Purse> monedero {  get; set; }

    }
}
