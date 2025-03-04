using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using back_pp_001.Models;

namespace back_pp_001.Data.Configuration
{
    public class ContainerConfiguration : IEntityTypeConfiguration<Container>
    {
        public void Configure(EntityTypeBuilder<Container> builder)
        {
            builder.ToTable("CONTENEDOR");

            builder.HasKey(e => e.IdContainer);

            builder.Property(e => e.IdContainer).HasColumnName("id_contenedor");
            builder.Property(e => e.NameContainer).HasColumnName("nombre_conenedor");
            builder.Property(e => e.ContainerCapacity).HasColumnName("capacidad_contenedor");
            builder.Property(e => e.ContainerDescription).HasColumnName("descripcion_contenedor");
        }
    }
}
