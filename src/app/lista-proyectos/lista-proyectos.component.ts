import { Component } from '@angular/core';
import { Proyecto } from '../modelo/proyecto';
import { Empleado } from '../modelo/empleado';
import { ProyectoComponent } from "../proyecto/proyecto.component";

@Component({
    selector: 'app-lista-proyectos',
    standalone: true,
    templateUrl: './lista-proyectos.component.html',
    styles: ``,
    imports: [ProyectoComponent]
})
export class ListaProyectosComponent {
  public proyectos:Proyecto[];
  private empleados:Empleado[];
  constructor() {
    const url:string='https://randomuser.me/api/portraits';
    this.empleados = [
      new Empleado(1,'Juan','López','Contabilidad',url+'/men/57.jpg'),
      new Empleado(2,'Ana','Miró','Ventas',url+'/women/12.jpg'),
      new Empleado(3,'Carlos','Simón','Contabilidad',url+'/men/1.jpg'),
      new Empleado(4,'Lucía','Sanchez','Ventas',url+'/women/4.jpg'),
      new Empleado(5,'Manuel','Gamez','Contabilidad',url+'/men/12.jpg'),
      new Empleado(6,'Eva','Saez','Contabilidad',null)
    ];
    this.proyectos = [
      new Proyecto(1,"Desarrollo Aplicación Angular", this.empleados[2],
        [this.empleados[0], this.empleados[3], this.empleados[4]]),
      new Proyecto(2,"Cierre del Balance Anual", this.empleados[1],
       this.empleados.filter(e => e.departamento === 'Contabilidad')),
      new Proyecto(3,"Documentación Aplicación Angular", this.empleados[2],[]),
    ];
  }
}
