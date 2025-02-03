using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using back_pp_001.Models;

namespace back_pp_001.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<CoinType> CoinTypes { get; set; }
        public DbSet<Inventory> Inventories { get; set; }
        public DbSet<Purse> Purses { get; set; }
        public DbSet<PurseContent> purseContents { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CoinType>(entity =>
            {
                entity.ToTable("TIPO_MONEDA");
                entity.HasKey(e => e.IdCoinType);
                entity.Property(e => e.IdCoinType).HasColumnName("id_tipo_moneda");
                entity.Property(e => e.NameCoinType).HasColumnName("nombre_tipo_moneda");
            });

            modelBuilder.Entity<Inventory>(entity =>
            {
                entity.ToTable("INVENTARIO");
                entity.HasKey(e => e.IdInventory);
                entity.Property(e => e.IdInventory).HasColumnName("id_inventario");
                entity.Property(e => e.TotalWeight).HasColumnName("peso_total");
                entity.Property(e => e.IdPurse).HasColumnName("id_monedero");
            });

            modelBuilder.Entity<Purse>(entity =>
            {
                entity.ToTable("MONEDERO");
                entity.HasKey(e =>e.IdPurse);
                entity.Property(e => e.IdPurse).HasColumnName("id_monedero");
            });

            modelBuilder.Entity<PurseContent>(entity =>
            {
                entity.HasKey(e => new { e.IdPurse,e.IdCoinType });

                entity.HasOne(e => e.IdPurse)
                      .WithMany(u => u.)
                      .HasForeignKey(e => e.IdPurse)

                entity.ToTable("CONTENIDO_MONEDERO");
            });
        }

    }
}
