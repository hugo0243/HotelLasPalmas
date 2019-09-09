import { Component, OnInit } from '@angular/core';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { Habitacion } from 'src/app/modelos/Habitacion';
import { async } from 'q';
import { ModalHabitacionService } from 'src/app/services/modal-habitacion.service';


@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {

  habitaciones: Habitacion[];
  habitacionesDisponibles: Habitacion[];
  habitacionSeleccionada: Habitacion;

   constructor(private habitacionService: HabitacionService
    , private modalHabitacionService: ModalHabitacionService) { }


  ngOnInit() { 
     this.habitacionService.getHabitaciones()
     .subscribe(habitaciones => {
       this.habitaciones = habitaciones;

       this.habitacionesDisponibles = this.habitaciones
       .filter(hab => hab.estado === 'disponible');
     });

     console.log(this.modalHabitacionService.modal);
  } 


  showHabitacionesDisponibles(){
    console.log(this.habitacionesDisponibles);
  }

  abrirModal(habitacion: Habitacion) {
    this.habitacionSeleccionada = habitacion;
    console.log(this.habitacionSeleccionada);
    this.modalHabitacionService.abrirModal();
  }
}
