using System;
using System.Collections.Generic;
using System.Text;

namespace Entity.CustomModel
{
    public class LibroFiltroModel
    {
        public int IdAsignatura { get; set; }
        public string Descripcion { get; set; }
        public int StockRangoInicio { get; set; }
        public int StockRangoFin { get; set; }
    }
    public class AddUpdateLibros
    {
        public int libro_id { get; set; }
        public string nombre { get; set; }
        public int cantidad { get; set; }
        public int asignaturaId { get; set; }
    }
    public class DeleteLibro
    {
        public int libro_id { get; set; }
    }
}
