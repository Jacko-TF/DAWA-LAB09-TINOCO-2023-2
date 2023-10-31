import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Rodriguez Pablo';
  edad = 40;
  email = 'rpablo@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;
  sitio='http://www.google.com';
  contador = 1;
  profesion = '';
  anios = '';

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }
  
  esActivo(){
    if(this.activo)
      return "Trabajador Activo";
    else
      return 'Trabajador Inactivo';
  }

  ultimos3Sueldos(){
    let suma = 0;
    for (let x=0;x<this.sueldos.length;x++){
      suma += this.sueldos[x];
    }
    return suma;
  }
}
