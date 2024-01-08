import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PieComponent } from './pie/pie.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { ProyectoComponent } from "./proyecto/proyecto.component";
import { ListaProyectosComponent } from "./lista-proyectos/lista-proyectos.component";
import { BarraNavegacionComponent } from "./barra-navegacion/barra-navegacion.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ListaEmpleadosComponent, PieComponent,
        ProyectoComponent, ListaProyectosComponent, BarraNavegacionComponent]
})
export class AppComponent {
  title = 'Mi Primera Aplicación';
  nombre = 'Iñigo Chueca';
}
