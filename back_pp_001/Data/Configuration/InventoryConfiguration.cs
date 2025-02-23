using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using back_pp_001.Models;

namespace back_pp_001.Data.Configuration
{
    public class InventoryConfiguration : IEntityTypeConfiguration<Inventory>
    {
        public void Configure(EntityTypeBuilder<Inventory> builder)
        {
            builder.ToTable("INVENTARIO");

            builder.HasKey(e => e.IdInventory);

            builder.Property(e => e.IdInventory).HasColumnName("id_inventario");
            builder.Property(e => e.TotalWeight).HasColumnName("peso_total");
            builder.Property(e => e.IdPurse).HasColumnName("id_monedero");
            
            builder.HasOne(e => e.Purse)
                   .WithMany(u => u.Inventory)
                   .HasForeignKey(e => e.IdPurse);
        }
    }
}