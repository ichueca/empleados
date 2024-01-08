import { Component } from '@angular/core';

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.css'
})
export class PieComponent {
  public empresa:string;
  public url:string;
  public fecha:Date;

  constructor(){
    this.empresa = "Zabalburu Ikastetxea";
    this.url = "https://www.zabalburu.org";
    this.fecha = new Date();
  }

  public getFechaFormateada():string {
    return this.fecha.toLocaleDateString();
  }

}
