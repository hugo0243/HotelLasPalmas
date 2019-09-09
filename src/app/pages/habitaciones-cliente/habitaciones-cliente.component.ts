import { Component, OnInit } from '@angular/core';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { Habitacion } from 'src/app/modelos/Habitacion';

@Component({
  selector: 'app-habitaciones-cliente',
  templateUrl: './habitaciones-cliente.component.html',
  styleUrls: ['./habitaciones-cliente.component.css']
})
export class HabitacionesClienteComponent implements OnInit {

  habitaciones: Habitacion[];

  constructor(private habitacioneService: HabitacionService) { }

  ngOnInit() {
    this.habitacioneService.getHabitaciones()
    .subscribe(habitaciones => this.habitaciones = habitaciones );
  }

}
