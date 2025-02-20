using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using back_pp_001.Models;

namespace back_pp_001.Data.Configuration
{
    public class ItemConfiguration : IEntityTypeConfiguration<Item>
    {
        public void Configure(EntityTypeBuilder<Item> builder)
        {
            builder.ToTable("PRUEBA_ITEM");
            builder.HasKey("id_item");
            builder.Property(e => e.IdItem).HasColumnName("id_item");
            builder.Property(e => e.NameItem).HasColumnName("nombre_item");
            builder.Property(e => e.Price).HasColumnName("precio_item");
        }
    }
}