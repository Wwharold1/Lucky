using System;
using System.Collections.Generic;
using System.Text;

namespace Entity.Entities
{
    public class TB_Libro
    {
        public int id_libro { get; set; }
        public string descripcion { get; set; }
        public int asignaturaId { get; set; }
        public int stock { get; set; }
    }
}
