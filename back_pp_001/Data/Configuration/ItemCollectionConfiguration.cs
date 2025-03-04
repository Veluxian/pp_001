using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using back_pp_001.Models;

namespace back_pp_001.Data.Configuration
{
    public class ItemCollectionConfiguration : IEntityTypeConfiguration<ItemsCollection>
    {
        public void Configure(EntityTypeBuilder<ItemsCollection> builder)
        {
            builder.ToTable("CONJUNTO_OBJETO");

            builder.HasKey(e => e.IdContainer);

            builder.Property(e => e.IdContainer).HasColumnName("id_contenedor");
            builder.Property(e => e.IdItem).HasColumnName("id_objeto");
            builder.Property(e => e.ItemQuantity).HasColumnName("cantidad_objeto");

            builder.HasOne(e => e.Container)
                   .WithMany(u => u.ItemCollection)
                   .HasForeignKey(e => e.IdContainer);

            builder.HasOne(e => e.Item)
                   .WithMany(u => u.ItemCollection)
                   .HasForeignKey(e => e.IdItem);
        }

    }
}
