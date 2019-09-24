import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculador-precios',
  templateUrl: './calculador-precios.component.html',
  styleUrls: ['./calculador-precios.component.css']
})
export class CalculadorPreciosComponent implements OnInit {

  private entrada: number;
  private salida : number;
  private total: number = 0;
  private cantidadPersonas: number;
  private PRECIO_DIA = 40000;

  constructor() { }

  ngOnInit() {
  }


  onCalcular(): void {

      if ((this.salida && this.entrada) && this.entrada < this.salida && this.cantidadPersonas > 0) {
        this.total = ((this.salida - this.entrada) / 86400000) * this.cantidadPersonas * this.PRECIO_DIA ;    
      }
    }   
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    