using Microsoft.AspNetCore.Mvc;
using BackendCursos.Models;
using BackendCursos.Services;

namespace BackendCursos.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CursosController : ControllerBase
    {
        private readonly CursoService _cursoService;

        public CursosController(CursoService cursoService)
        {
            _cursoService = cursoService;
        }

        // GET: api/cursos
        [HttpGet]
        public ActionResult<List<Curso>> ObtenerTodos()
        {
            return Ok(_cursoService.ObtenerTodos());
        }

        // GET: api/cursos/1
        [HttpGet("{id}")]
        public ActionResult<Curso> ObtenerPorId(int id)
        {
            var curso = _cursoService.ObtenerPorId(id);

            if (curso == null)
            {
                return NotFound();
            }

            return Ok(curso);
        }

        // POST: api/cursos
        [HttpPost]
        public ActionResult<Curso> Agregar(Curso curso)
        {
            var nuevoCurso = _cursoService.Agregar(curso);

            return CreatedAtAction(
                nameof(ObtenerPorId),
                new { id = nuevoCurso.Id },
                nuevoCurso
            );
        }

        // PUT: api/cursos/1
        [HttpPut("{id}")]
        public IActionResult Actualizar(int id, Curso curso)
        {
            bool actualizado = _cursoService.Actualizar(id, curso);

            if (!actualizado)
            {
                return NotFound();
            }

            return NoContent();
        }

        // DELETE: api/cursos/1
        [HttpDelete("{id}")]
        public IActionResult Eliminar(int id)
        {
            bool eliminado = _cursoService.Eliminar(id);

            if (!eliminado)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}