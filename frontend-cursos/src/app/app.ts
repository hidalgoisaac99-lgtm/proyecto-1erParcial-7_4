import { Component } from '@angular/core';

import { Encabezado } from './encabezado/encabezado';
import { ListaCursos } from './lista-curso/lista-curso';
import { FormularioCurso } from './formulario-curso/formulario-curso';
import { PiePagina } from './pie-pagina/pie-pagina';

import { Curso } from './models/curso';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Encabezado,
    ListaCursos,
    FormularioCurso,
    PiePagina
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Programación Web',
      docente: 'Carlos Mendoza',
      activo: true
    },
    {
      id: 2,
      nombre: 'Base de Datos',
      docente: 'María López',
      activo: true
    },
    {
      id: 3,
      nombre: 'Angular',
      docente: 'José Rodríguez',
      activo: false
    }
  ];

  cursoSeleccionado: Curso | null = null;

  // AGREGAR O ACTUALIZAR CURSO
  guardarCurso(curso: Curso): void {

    if (curso.id === 0) {

      const nuevoId = this.cursos.length > 0
        ? Math.max(...this.cursos.map(c => c.id)) + 1
        : 1;

      const nuevoCurso: Curso = {
        ...curso,
        id: nuevoId
      };

      this.cursos = [...this.cursos, nuevoCurso];

      alert('Curso agregado correctamente');

    } else {

      this.cursos = this.cursos.map(c =>
        c.id === curso.id ? { ...curso } : c
      );

      alert('Curso actualizado correctamente');
    }

    this.cursoSeleccionado = null;
  }

  // EDITAR CURSO
  editarCurso(curso: Curso): void {
    this.cursoSeleccionado = { ...curso };
  }

  // ELIMINAR CURSO
  eliminarCurso(id: number): void {

    if (confirm('¿Desea eliminar este curso?')) {

      this.cursos = this.cursos.filter(c => c.id !== id);

    }
  }

  // CAMBIAR ESTADO
  cambiarEstado(id: number): void {

    this.cursos = this.cursos.map(c =>
      c.id === id
        ? { ...c, activo: !c.activo }
        : c
    );
  }

  // CANCELAR EDICIÓN
  cancelarEdicion(): void {
    this.cursoSeleccionado = null;
  }

  // CONTADORES
  get cursosActivos(): number {
    return this.cursos.filter(c => c.activo).length;
  }

  get cursosInactivos(): number {
    return this.cursos.filter(c => !c.activo).length;
  }

}