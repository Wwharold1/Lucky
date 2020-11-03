using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Business.BussinesLogic;
using Entity.CustomModel;
using Entity.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LuckyJobs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibroController : ControllerBase
    {
        private readonly ILogger<LibroController> _logger;
        private LibroBusinessLogic _libroBusinessLogic = new LibroBusinessLogic();
        public LibroController(ILogger<LibroController> logger)
        {
            _logger = logger;
        }
        [HttpGet("GetLibros")]
        public async Task<IEnumerable<TB_Libro>> GetLibros([FromQuery]LibroFiltroModel model)
        {
            return await _libroBusinessLogic.GetLibros(model);
        }
        [HttpPost("AddUpdateLibros")]
        public async Task<int> AddUpdateLibros([FromBody] AddUpdateLibros model)
        {
            return await _libroBusinessLogic.AddUpdateLibro(model);
        }
        [HttpPost("DeleteLibro")]
        public async Task<int> DeleteLibro([FromBody] DeleteLibro model)
        {
            return await _libroBusinessLogic.DeleteLibro(model.libro_id);
        }
    }
}
