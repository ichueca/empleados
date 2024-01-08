import { Component, Input } from '@angular/core';
import { Proyecto } from '../modelo/proyecto';
import { Empleado } from '../modelo/empleado';
import { MiembroProyectoComponent } from "../miembro-proyecto/miembro-proyecto.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-proyecto',
    standalone: true,
    templateUrl: './proyecto.component.html',
    styles: ``,
    imports: [MiembroProyectoComponent, CommonModule]
})
export class ProyectoComponent {
  @Input() proyecto: Proyecto = new Proyecto(
    1,
    "Desarrollo Aplicación Angular",
    new Empleado(0, "Juan", "López", "", ""),
    [new Empleado(0, "Ana", "Marín", "", ""),
    new Empleado(0, "Eva", "Aimón", "", "")]);
    @Input() mostrarMiembros:boolean = false;

  cambiarMostrarMiembros(){
    this.mostrarMiembros = ! this.mostrarMiembros;
  }

  quitarEmpleado(empleado:Empleado){
    const pos = this.proyecto.miembros.findIndex(e => e.id === empleado.id);
    this.proyecto.miembros.splice(pos,1);
  }
}
