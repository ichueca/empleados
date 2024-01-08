import { Component } from '@angular/core';
import { Empleado } from '../modelo/empleado';
import { EmpleadoComponent } from '../empleado/empleado.component';
import { EmpleadosService } from '../servicios/empleados.service';

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [EmpleadoComponent],
  templateUrl: './lista-empleados.component.html',
  styles: ``
})
export class ListaEmpleadosComponent {
  public empleados:Empleado[];
  constructor(private servicio:EmpleadosService) {
    const url:string='https://randomuser.me/api/portraits';
    this.empleados = servicio.getEmpleados();
  }
}
