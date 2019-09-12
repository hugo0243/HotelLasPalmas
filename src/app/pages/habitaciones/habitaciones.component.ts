import { Component, OnInit } from '@angular/core';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { Habitacion } from 'src/app/modelos/Habitacion';
import { ModalHabitacionService } from 'src/app/services/modal-habitacion.service';
import { Reserva } from 'src/app/modelos/Reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import { ModalReservaService } from 'src/app/services/modal-reserva.service';


@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {

  habitaciones: Habitacion[];
  habitacionesDisponibles: Habitacion[];
  habitacionSeleccionada: Habitacion;

  reservas: Reserva[];
  reservaSeleccionada: Reserva;

   constructor(private habitacionService: HabitacionService
    , private modalHabitacionService: ModalHabitacionService,
    private reservasService: ReservaService,
    private modalReservaService: ModalReservaService) { }


  ngOnInit() {
    this.cargaHabitacionesReservas();
  }

  cargaHabitacionesReservas(){
// carga las habitaciones
this.habitacionService.getHabitaciones()
.subscribe(habitaciones => {
  this.habitaciones = habitaciones;

  this.habitacionesDisponibles = this.habitaciones
  .filter(hab => hab.estado === 'disponible');
});


// carga las reservas
this.reservasService.showReservas()
.subscribe(reservas => {
  this.reservas = reservas;
 
  this.reservas.map((r,i)=>r.fechaReserva = new Date(reservas[i].fechaReserva));
/*   console.log(reservas[1].fechaReserva); */
});
  }


  showHabitacionesDisponibles(){
    console.log(this.habitacionesDisponibles);
  }

  abrirModal(habitacion: Habitacion) {
    this.habitacionSeleccionada = habitacion;
    console.log(this.habitacionSeleccionada);
    this.modalHabitacionService.abrirModal();
  }

  abrirModalReserva(reserva: Reserva){
    this.reservaSeleccionada = reserva;
    this.modalReservaService.abrirModalReserva();
  }
}
