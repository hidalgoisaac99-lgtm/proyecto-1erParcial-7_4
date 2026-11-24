using BackendCursos.Models;

namespace BackendCursos.Services
{
    public class CursoService
    {
        private readonly List<Curso> cursos = new List<Curso>
        {
            new Curso
            {
                Id = 1,
                Nombre = "Programación Web",
                Docente = "Carlos Mendoza",
                Activo = true
            },

            new Curso
            {
                Id = 2,
                Nombre = "Base de Datos",
                Docente = "María López",
                Activo = true
            },

            new Curso
            {
                Id = 3,
                Nombre = "Angular",
                Docente = "José Rodríguez",
                Activo = false
            }
        };

        // Obtener todos los cursos
        public List<Curso> ObtenerTodos()
        {
            return cursos;
        }

        // Obtener un curso por su ID
        public Curso? ObtenerPorId(int id)
        {
            return cursos.FirstOrDefault(c => c.Id == id);
        }

        // Agregar un curso
        public Curso Agregar(Curso curso)
        {
            curso.Id = cursos.Count > 0
                ? cursos.Max(c => c.Id) + 1
                : 1;

            cursos.Add(curso);

            return curso;
        }

        // Actualizar un curso
        public bool Actualizar(int id, Curso cursoActualizado)
        {
            var curso = ObtenerPorId(id);

            if (curso == null)
            {
                return false;
            }

            curso.Nombre = cursoActualizado.Nombre;
            curso.Docente = cursoActualizado.Docente;
            curso.Activo = cursoActualizado.Activo;

            return true;
        }

        // Eliminar un curso
        public bool Eliminar(int id)
        {
            var curso = ObtenerPorId(id);

            if (curso == null)
            {
                return false;
            }

            cursos.Remove(curso);

            return true;
        }
    }
}