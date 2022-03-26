// Clase creada para definir el Modelo. A través de Code First generaremos la BD en SQL Server.
// Antes instalar por NuGet las dependencias: 
// 1) Microsoft.EntityFrameworkCore
// 2) Microsoft.EntityFrameworkCore.SqlServer
// 3) Microsoft.EntityFrameworkCore.Tools

using System.ComponentModel.DataAnnotations;

namespace FBTarjetaCredito.Models
{
    public class TarjetaCredito
    {
        // definimos las propiedades del modelo (A la prop ID no hace falta definirla requerida)
        public int Id { get; set; }
        [Required]
        public string Titular { get; set; }
        [Required]
        public string NumeroTarjeta { get; set; }
        [Required]
        public string FechaExpiracion { get; set; }
        [Required]
        public string Cvv { get; set; }
    }
}
