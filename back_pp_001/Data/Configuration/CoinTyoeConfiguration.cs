using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using back_pp_001.Models;

namespace back_pp_001.Data.Configuration
{
    public class CoinTyoeConfiguration : IEntityTypeConfiguration<Purse>
    {
        public void Configure(EntityTypeBuilder<Purse> builder)
        {
            builder.ToTable("TIPO_MONEDA");

            builder.HasKey(e => e.IdPurse);
        }
    }
}
