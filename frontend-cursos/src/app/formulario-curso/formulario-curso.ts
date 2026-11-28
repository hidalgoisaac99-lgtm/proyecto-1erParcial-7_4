import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Curso } from '../models/curso';

@Component({
  selector: 'app-formulario-curso',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-curso.html',
  styleUrl: './formulario-curso.css'
})
export class FormularioCurso implements OnChanges {

  @Input() cursoEditar: Curso | null = null;

  @Output() guardar = new EventEmitter<Curso>();

  @Output() cancelar = new EventEmitter<void>();

  curso: Curso = this.nuevoCurso();

  nuevoCurso(): Curso {
    return {
      id: 0,
      nombre: '',
      docente: '',
      activo: true
    };
  }

  ngOnChanges(): void {
    if (this.cursoEditar) {
      this.curso = { ...this.cursoEditar };
    } else {
      this.curso = this.nuevoCurso();
    }
  }

  guardarCurso(): void {

    if (!this.curso.nombre.trim() ||
        !this.curso.docente.trim()) {
      alert('Complete todos los campos');
      return;
    }

    this.guardar.emit({ ...this.curso });

    this.curso = this.nuevoCurso();
  }

  cancelarEdicion(): void {
    this.curso = this.nuevoCurso();
    this.cancelar.emit();
  }
}
