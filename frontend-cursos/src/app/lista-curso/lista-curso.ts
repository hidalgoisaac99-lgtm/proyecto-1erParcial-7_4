import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Curso } from '../models/curso';

@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-curso.html',
  styleUrl: './lista-curso.css'
})
export class ListaCursos {

  @Input() cursos: Curso[] = [];

  @Output() editar = new EventEmitter<Curso>();

  @Output() eliminar = new EventEmitter<number>();

  @Output() cambiarEstado = new EventEmitter<number>();

}
