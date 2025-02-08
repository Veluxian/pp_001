using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using back_pp_001.Models;

namespace back_pp_001.Data.Configuration
{
    public class CoinTypeConfiguration : IEntityTypeConfiguration<CoinType>
    {
        public void Configure(EntityTypeBuilder<CoinType> builder)
        {
            builder.ToTable("TIPO_MONEDA");

            builder.HasKey(e => e.IdCoinType);
            builder.Property(e => e.IdCoinType).HasColumnName("id_tipo_moneda");
            builder.Property(e => e.NameCoinType).HasColumnName("nombre_tipo_moneda");

        }
    }
}
