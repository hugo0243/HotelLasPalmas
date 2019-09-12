import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalReservaService {

  modalReserva: boolean = false;

  constructor() { }

  abrirModalReserva() {
    this.modalReserva = true;
  }

  cerrarModalReserva(){
    this.modalReserva = false;
  }
}
