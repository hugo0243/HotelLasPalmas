import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormField } from '@angular/material';

import { HabitacionService } from 'src/app/services/habitacion.service';
import { Habitacion } from 'src/app/modelos/Habitacion';
import { ModalHabitacionService } from 'src/app/services/modal-habitacion.service';
import { Reserva } from 'src/app/modelos/Reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import { ModalReservaService } from 'src/app/services/modal-reserva.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

import { FormControl } from '@angular/forms';


export class Datos {

  constructor(private numHabitacion: string, private nombreCliente: string, private primerApellido: string,
    private fechaReserva: Date, private idReserva: any,private reserva: Reserva) {

  }
}

export interface PeriodicElement {
  nameo: string;
  position: number;
  weight: number;
  symbol: string;
}




const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nameo: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, nameo: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, nameo: 'Lithium', weight: 6.941, symbol: 'Li'},
/*   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}, */
]; 


@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit{

  paginador: any;

  todos: Datos[] = [];

  habitaciones: Habitacion[];
  habitacionesDisponibles: Habitacion[];
  habitacionSeleccionada: Habitacion;


  reservas: Reserva[];
  reservaSeleccionada: Reserva;

  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  constructor(private habitacionService: HabitacionService,
    private modalHabitacionService: ModalHabitacionService,
    private reservasService: ReservaService,
    private modalReservaService: ModalReservaService,
    private activatedRoute: ActivatedRoute) {

  }


  ngOnInit() {
    this.cargaHabitacionesReservas();
  }


  cargaHabitacionesReservas() {

    // se suscribe a los parámetros de la ruta para estar atento a cada vez que page cambie de valor
    // así se hace reactivo
    /*  this.activatedRoute.paramMap.subscribe(params => {
       let page: number = +params.get('page');
 
       if (!page) {
         page = 0;
       }
 
       this.reservasService.getReservasPaginadas(page).subscribe(response => {
         this.reservas = response.content as Reserva[];
         this.paginador = response;
         this.todos = [];
         this.reservas.forEach(reserva => {
          this.todos.push(new Datos(reserva.idHabitacion.num_habitacion,reserva.id_cliente.nombre
            ,reserva.id_cliente.primer_apellido,reserva.fechaReserva,reserva.id_reserva,reserva));
         });

         this.dataSource = new MatTableDataSource(this.todos);
       });
     }); */

    // carga las reservas
    this.reservasService.showReservas()
      .subscribe(reservas => {
        this.reservas = reservas;

        for (let reserva of reservas) {
            this.todos.push(new Datos(reserva.idHabitacion.num_habitacion,reserva.id_cliente.nombre
              ,reserva.id_cliente.primer_apellido,reserva.fechaReserva,reserva.id_reserva,reserva));
        }


        this.dataSource = new MatTableDataSource(this.todos);
        this.dataSource.paginator = this.paginator;
        /*  console.log(this.reservas);  */
        //this.reservas.map((r,i)=>r.fechaReserva = new Date(reservas[i].fechaReserva));
        /*   console.log(reservas[1].fechaReserva); */
       });

    /* this.reservasService.getReservasPaginadas().subscribe(response => {
      this.reservas  = response.content as Reserva[];
      console.log(this.reservas);
    });
     */

    // carga las habitaciones
    this.habitacionService.getHabitaciones()
      .subscribe(habitaciones => {
        this.habitaciones = habitaciones;

        this.habitacionesDisponibles = this.habitaciones
          .filter(hab => hab.estado === 'disponible');


      });



  }


  showHabitacionesDisponibles() {
    console.log(this.habitacionesDisponibles);
  }

  //cancela una reserva
  onDeleteReserva(reserva: Reserva) {
    Swal.fire({
      title: 'Desea cancelar esta reserva?',
      text: 'Se borrará su regitro',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cancelar reserva'
    }).then(result => {
      if (result.value) {
        this.reservasService.deleteReserva(reserva.id_reserva).subscribe(response => {
          this.reservas = this.reservas.filter(re => re !== reserva);
          Swal.fire('se ha cancelado esta reserva', 'success');
        });
      }
    })
  }

  abrirModal(habitacion: Habitacion) {
    this.habitacionSeleccionada = habitacion;
    console.log(this.habitacionSeleccionada);
    this.modalHabitacionService.abrirModal();
  }

  abrirModalReserva(reserva: Reserva) {
    this.reservaSeleccionada = reserva;
    this.modalReservaService.abrirModalReserva();
  }

  /*   <td>{{reserva.id_reserva}}kkkk</td>
    <td>{{reserva.idHabitacion.num_habitacion}}</td>
    <td>{{reserva.id_cliente.nombre}} {{reserva.id_cliente.primer_apellido}}</td>
    <td>{{reserva.fechaReserva | date:'medium'}}</td> */

  /*   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol']; */
 /*  displayedColumns: string[] = ['id_reserva', 'num_habitacion', 'id_cliente.nombre', 'primer_apellido', 'fechaReserva', 'info', 'editar', 'cancelar']; */
 displayedColumns: string[] = ['idReserva', 'numHabitacion', 'nombreCliente', 'primerApellido', 'fechaReserva', 'info', 'editar', 'cancelar'];
  dataSource;
  /*  dataSource = new MatTableDataSource(this.habitacionesDisponibles); */

  applyFilter(filterValue: string) {
   /*  console.log(this.dataSource); */
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
