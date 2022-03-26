// Clase creada para definir la conexión a la DB.

using FBTarjetaCredito.Models;
using Microsoft.EntityFrameworkCore;

namespace FBTarjetaCredito
{
    // generamos la Herencia
    public class ApplicationDbContext: DbContext
    {
        // mapeamos la BD con los DBSets
        public DbSet<TarjetaCredito> TarjetaCredito { get; set; }


        // creamos el controlador
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {

        }
    }
}
