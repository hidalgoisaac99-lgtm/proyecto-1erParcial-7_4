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
    },
    {
      id: 4,
      nombre: 'Ingeniería de Software',
      docente: 'Ana Torres',
      activo: true
    }
  ];

  cursoSeleccionado: Curso | null = null;

  guardarCurso(curso: Curso): void {

    if (curso.id === 0) {

      const nuevoId = this.cursos.length > 0
        ? Math.max(...this.cursos.map(c => c.id)) + 1
        : 1;

      this.cursos.push({
        ...curso,
        id: nuevoId
      });

    } else {

      this.cursos = this.cursos.map(c =>
        c.id === curso.id ? { ...curso } : c
      );

    }

    this.cursoSeleccionado = null;
  }

  editarCurso(curso: Curso): void {
    this.cursoSeleccionado = { ...curso };
  }

  eliminarCurso(id: number): void {

    if (confirm('¿Está seguro de eliminar este curso?')) {
      this.cursos = this.cursos.filter(c => c.id !== id);
    }

  }

  cambiarEstado(id: number): void {

    this.cursos = this.cursos.map(c =>
      c.id === id ? { ...c, activo: !c.activo } : c
    );

  }

  cancelarEdicion(): void {
    this.cursoSeleccionado = null;
  }

  get cursosActivos(): number {
  return this.cursos.filter(c => c.activo).length;
}

get cursosInactivos(): number {
  return this.cursos.filter(c => !c.activo).length;
}

}
