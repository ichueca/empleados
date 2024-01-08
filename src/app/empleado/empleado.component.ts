import { Component, Input } from '@angular/core';
import { Empleado } from '../modelo/empleado';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  @Input() public empleado:Empleado = new Empleado(1,'Juan','López','Compras','https://randomuser.me/api/portraits/men/86.jpg');
  @Input() public ocultar:boolean = false;


  constructor(private router:Router){
  }

  nombreCompleto(): string {
    return `${this.empleado.nombreCompleto()}`;
  }

  cambiarVisibilidad(){
    this.ocultar = !this.ocultar;
  }

  verMas(){
    this.router.navigate(['/empleados',this.empleado.id]);
  }
}
