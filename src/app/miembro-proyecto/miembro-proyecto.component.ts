import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../modelo/empleado';

@Component({
  selector: 'app-miembro-proyecto',
  standalone: true,
  imports: [],
  templateUrl: './miembro-proyecto.component.html',
  styles: ``
})
export class MiembroProyectoComponent {
  @Input() public empleado:Empleado = new Empleado(0,"Juan","López","","");
  @Output() public empleadoQuitado = new EventEmitter();

  quitarEmpleado(){
    this.empleadoQuitado.emit(this.empleado);
  }
}
