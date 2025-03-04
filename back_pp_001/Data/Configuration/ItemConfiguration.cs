using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using back_pp_001.Models;

namespace back_pp_001.Data.Configuration
{
    public class ItemConfiguration : IEntityTypeConfiguration<Item>
    {
        public void Configure(EntityTypeBuilder<Item> builder) 
        {
            builder.ToTable("OBJETO");

            builder.HasKey(e => e.IdItem);

            builder.Property(e => e.IdItem).HasColumnName("id_objeto");
            builder.Property(e => e.ItemName).HasColumnName("nombre_objeto");
            builder.Property(e => e.ItemDescription).HasColumnName("descripcion_objeto");
            builder.Property(e => e.ItemWeight).HasColumnName("peso_objeto");
            builder.Property(e => e.ItemPrice).HasColumnName("costo_objeto");
            builder.Property(e => e.IdItemType).HasColumnName("id_tipo_objeto");

            builder.HasOne(e => e.ItemType)
                   .WithMany(u => u.Item)
                   .HasForeignKey(e => e.IdItemType);
        }

    }
}
