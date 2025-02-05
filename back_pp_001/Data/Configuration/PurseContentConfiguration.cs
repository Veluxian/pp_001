using back_pp_001.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace back_pp_001.Data.Configuration
{
    public class PurseContentConfiguration : IEntityTypeConfiguration<PurseContent>
    {
        public void Configure(EntityTypeBuilder<PurseContent> builder)
        {
            builder.ToTable("CONTENIDO_MONEDERO");
            
            builder.HasKey(e => new { e.IdPurse, e.IdCoinType });
            
            builder.Property(e => e.IdPurse).HasColumnName("id_monedero");
            builder.Property(e => e.IdCoinType).HasColumnName("id_tipo_moneda");
            builder.Property(e => e.Quantity).HasColumnName("cantidad");

            builder.HasOne(e => e.Purse)
                   .WithMany(u => u.PurseContent)
                   .HasForeignKey(e => e.IdPurse);

            builder.HasOne(e => e.CoinType)
                   .WithMany(u => u.PurseContent)
                   .HasForeignKey(e => e.IdCoinType);

        }
    }
}
