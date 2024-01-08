import { Injectable } from '@angular/core';
import { Empleado } from '../modelo/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private empleados:Empleado[];

  constructor() {
    const url:string='https://randomuser.me/api/portraits';
    this.empleados = [
        new Empleado(1,'Juan','López','Contabilidad',url+'/men/57.jpg'),
        new Empleado(2,'Ana','Miró','Ventas',url+'/women/12.jpg'),
        new Empleado(3,'Carlos','Simón','Contabilidad',url+'/men/1.jpg'),
        new Empleado(4,'Lucía','Sanchez','Ventas',url+'/women/4.jpg'),
        new Empleado(5,'Manuel','Gamez','Contabilidad',url+'/men/12.jpg'),
        new Empleado(6,'Ana','Simón','Contabilidad',null)
    ];
  }

  getEmpleados():Empleado[]{
    return this.empleados;
  }

  getEmpleado(id:number):Empleado {
    return this.empleados.find(e => e.id == id)!;
  }

  quitarEmpleado(id:number){
    this.empleados.splice(this.empleados.findIndex(e => e.id ==id),1);
  }

  añadirEmpleado(e:Empleado){
    const id:number = this.empleados.length>0?this.empleados[this.empleados.length-1].id + 1:1;
    e.id = id;
    this.empleados.push(e);
  }
}
