using Entity.Entities;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using System.Data;
using Entity.CustomModel;
using System;

namespace Data.DataAccess
{
    public class LibroDataAccess
    {
        public async Task<IEnumerable<TB_Libro>> GetAllLibros(LibroFiltroModel model)
        {
            var libroList = new List<TB_Libro>();
            using (var connection = new SqlConnection("server=PELR90XMFFT\\SQLEXPRESS;database=DB_LIBRERIA; integrated security = true"))
            {
                {
                    SqlCommand cmd = new SqlCommand("SP_GetLibros", connection);
                    cmd.CommandType = CommandType.StoredProcedure;
                    await connection.OpenAsync();
                    cmd.Parameters.AddWithValue("@IdAsig", model.IdAsignatura);
                    cmd.Parameters.AddWithValue("@Descripcion", string.IsNullOrEmpty(model.Descripcion)? "": model.Descripcion);
                    cmd.Parameters.AddWithValue("@StockRagneInit", model.StockRangoInicio);
                    cmd.Parameters.AddWithValue("@StockRangeLast", model.StockRangoFin);
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        TB_Libro libro = new TB_Libro();
                        libro.asignaturaId = Convert.ToInt32(reader["id_asig"]);
                        libro.descripcion = reader["descripcion"].ToString();
                        libro.stock = Convert.ToInt32(reader["stock"]);
                        libro.id_libro = Convert.ToInt32(reader["id_libro"]);
                        libroList.Add(libro);
                    }
                    await connection.CloseAsync();
                }
            }
            return libroList;
        }

        public async Task<int> AddUpdateLibro(AddUpdateLibros model)
        {
            using (var connection = new SqlConnection("server=PELR90XMFFT\\SQLEXPRESS;database=DB_LIBRERIA; integrated security = true"))
            {
                {
                    SqlCommand cmd = new SqlCommand("SP_AddUpdateLibro", connection);
                    cmd.CommandType = CommandType.StoredProcedure;
                    await connection.OpenAsync();

                    // add parameters
                    cmd.Parameters.AddWithValue("@IdAsig", model.asignaturaId);
                    cmd.Parameters.AddWithValue("@Descripcion", string.IsNullOrEmpty(model.nombre) ? "" : model.nombre);
                    cmd.Parameters.AddWithValue("@Stock", model.cantidad);
                    cmd.Parameters.AddWithValue("@Libro_Id", model.libro_id);

                    SqlParameter outputParam = cmd.Parameters.Add("@Result", SqlDbType.Int);
                    outputParam.Direction = ParameterDirection.Output;
                    SqlDataReader reader = cmd.ExecuteReader();

                    int id = (int)outputParam.Value;

                    await connection.CloseAsync();
                    return id;
                }
            }
        }

        public async Task<int> DeleteLibro(int libro_id)
        {
            using (var connection = new SqlConnection("server=PELR90XMFFT\\SQLEXPRESS;database=DB_LIBRERIA; integrated security = true"))
            {
                {
                    SqlCommand cmd = new SqlCommand("SP_DeleteLibro", connection);
                    cmd.CommandType = CommandType.StoredProcedure;
                    await connection.OpenAsync();

                    // add parameters
                    cmd.Parameters.AddWithValue("@libro_id", libro_id);

                    SqlParameter outputParam = cmd.Parameters.Add("@Result", SqlDbType.Int);
                    outputParam.Direction = ParameterDirection.Output;
                    SqlDataReader reader = cmd.ExecuteReader();

                    int id = (int)outputParam.Value;

                    await connection.CloseAsync();
                    return id;
                }
            }
        }
    }
}
