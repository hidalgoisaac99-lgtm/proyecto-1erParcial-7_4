import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.css'
})
export class Encabezado {

  nombreSistema: string = 'Sistema de Gestión de Cursos';

  subtitulo: string = 'Desarrollo de Aplicaciones Web Avanzado';

}