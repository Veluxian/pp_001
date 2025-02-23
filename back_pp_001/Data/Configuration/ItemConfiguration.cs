using back_pp_001.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace back_pp_001.Data.Configuration
{
    public class ItemConfiguration :IEntityTypeConfiguration<Item>
    {
        public void Configure(EntityTypeBuilder<Item> builder)
        {
            builder.ToTable("Item");

            builder.HasKey(e => e.idItem);

            builder.Property(e => e.idItem).HasColumnName("id_item");
            builder.Property(e => e.nameItem).HasColumnName("nombre_item");
            builder.Property(e => e.price).HasColumnName("precio_item");
        }
    }
}
