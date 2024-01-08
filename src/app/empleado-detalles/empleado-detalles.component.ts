import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Empleado } from '../modelo/empleado';
import { EmpleadosService } from '../servicios/empleados.service';

@Component({
  selector: 'app-empleado-detalles',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './empleado-detalles.component.html',
  styles: ``
})
export class EmpleadoDetallesComponent {

  public empleados:Empleado[];
  public empleado:Empleado = new Empleado(0,'','','',null);

  constructor(private ruta:ActivatedRoute, private servicio:EmpleadosService) {
    const url:string='https://randomuser.me/api/portraits';
    this.empleados = servicio.getEmpleados();
    ruta.params.subscribe((params) => {
      const value = this.empleados.find(e => e.id == params['id']);
      if (value){ // Evitar el error de que el método find puede retornar undefined
        this.empleado = value;
      }
    });
  }

}
