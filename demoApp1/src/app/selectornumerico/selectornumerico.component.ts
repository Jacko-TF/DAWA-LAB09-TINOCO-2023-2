import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectornumerico',
  templateUrl: './selectornumerico.component.html',
  styleUrls: ['./selectornumerico.component.css']
})
export class SelectornumericoComponent implements OnInit{
  @Input() minimo: number;
  @Input() maximo: number;
  actual: number;
  constructor(){
    this.actual = 0;
    this.maximo = 0;
    this.minimo = 0;
   }
  ngOnInit(){
    this.actual = this.minimo;
  }
  incrementar(){
    if(this.actual<this.maximo)
      this.actual++;
  }
  decrementar(){
    if(this.actual>this.minimo)
      this.actual--;
  }
  fijar(v:number){
    if (v>=this.minimo && v<=this.maximo)
    this.actual=v;
  }
}