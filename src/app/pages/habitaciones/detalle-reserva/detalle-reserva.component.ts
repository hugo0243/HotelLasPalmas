import { Component, OnInit, Input } from '@angular/core';
import { Reserva } from 'src/app/modelos/Reserva';
import { ModalReservaService } from 'src/app/services/modal-reserva.service';

@Component({
  selector: 'app-detalle-reserva',
  templateUrl: './detalle-reserva.component.html',
  styleUrls: ['./detalle-reserva.component.css']
})
export class DetalleReservaComponent implements OnInit {

  @Input()
  reserva: Reserva;

  constructor(private modalReservaService: ModalReservaService) { }

  ngOnInit() {
    /* console.log(this.reserva.fecha_ingreso); */
  }

  cerrarModalReserva(){
    this.modalReservaService.cerrarModalReserva()
  }

}
