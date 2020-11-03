using Data.DataAccess;
using Entity.CustomModel;
using Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.BussinesLogic
{
    public class LibroBusinessLogic
    {
        LibroDataAccess libroDataAccess;
        public LibroBusinessLogic() 
        {
            libroDataAccess = new LibroDataAccess();
        }
        public Task<IEnumerable<TB_Libro>> GetLibros(LibroFiltroModel filtro) 
        {
            return libroDataAccess.GetAllLibros(filtro);
        }
        public Task<int> AddUpdateLibro(AddUpdateLibros model)
        {
            return libroDataAccess.AddUpdateLibro(model);
        }
        public Task<int> DeleteLibro(int libro_id)
        {
            return libroDataAccess.DeleteLibro(libro_id);
        }
    }
}
