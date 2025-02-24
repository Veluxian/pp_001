using back_pp_001.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace back_pp_001.Data.Configuration
{
    public class ItemTypeConfiguration : IEntityTypeConfiguration<ItemType>
    {
        public void Configure(EntityTypeBuilder<ItemType> builder)
        {
            builder.ToTable("TIPO_OBJETO");
            
            builder.HasKey(e => e.IdItemType);

            builder.Property(e => e.IdItemType).HasColumnName("id_tipo_objeto");
            builder.Property(e => e.NameItemType).HasColumnName("nombre_tipo_objeto");
        }
    }
}
