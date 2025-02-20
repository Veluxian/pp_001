using back_pp_001.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace back_pp_001.Data.Configuration
{
    public class PurseConfiguration : IEntityTypeConfiguration<Purse> 
    {
        public void Configure(EntityTypeBuilder<Purse> builder)
        {
            builder.ToTable("MONEDERO");
            builder.HasKey(e => e.IdPurse);
            builder.Property(e => e.IdPurse).HasColumnName("id_monedero");
        }
    }
}
