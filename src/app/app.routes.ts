import { Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';

export const routes: Routes = [
  { path: 'empleados', component: ListaEmpleadosComponent },
  { path: 'proyectos', component: ListaProyectosComponent },
  { path: 'empleados/:id', component: EmpleadoDetallesComponent},
  { path: '**', redirectTo:'empleados' },
];
