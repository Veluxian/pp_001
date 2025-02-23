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
        public DbSet<CoinType> CoinTypes { get; set; }
        public DbSet<Inventory> Inventories { get; set; }
        public DbSet<Purse> Purses { get; set; }
        public DbSet<PurseContent> purseContents { get; set; }
        public DbSet<Item> Items { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
        }
    }
}