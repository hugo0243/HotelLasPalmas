import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Reserva } from 'src/app/modelos/Reserva';
import { ModalReservaService } from 'src/app/services/modal-reserva.service';

@Component({
  selector: 'app-detalle-reserva',
  templateUrl: './detalle-reserva.component.html',
  styleUrls: ['./detalle-reserva.component.css']
})
export class DetalleReservaComponent implements OnInit, OnChanges {

  @Input()
  reserva: Reserva;
  totalPorDias: number;
  numAcompanantes: number;
  diasReservados: number ;

  constructor(private modalReservaService: ModalReservaService) { }

  ngOnInit() {

  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.numAcompanantes = (this.reserva.id_cliente.acompanantes ? this.reserva.id_cliente.acompanantes.length : 0) + 1;
    this.diasReservados = new Date(this.reserva.fechaSalida).getDate() -   new Date(this.reserva.fechaIngreso).getDate();
    this.totalPorDias = this.numAcompanantes *  this.diasReservados * 40000;
  }

  cerrarModalReserva(){
    this.modalReservaService.cerrarModalReserva();
    console.log(this.numAcompanantes);
    console.log(this.reserva.id_cliente);
  }

}
