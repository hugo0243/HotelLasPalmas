import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Acompanante } from 'src/app/modelos/Acompanante';
import { Cliente } from 'src/app/modelos/Cliente';
import { Reserva } from 'src/app/modelos/Reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import { Habitacion } from 'src/app/modelos/Habitacion';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { NgbDateStructAdapter } from '@ng-bootstrap/ng-bootstrap/datepicker/adapters/ngb-date-adapter';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-reservas-admin',
  templateUrl: './reservas-admin.component.html',
  styleUrls: ['./reservas-admin.component.css']
})
export class ReservasAdminComponent implements OnInit {

  // Info cliente
  cliente: Cliente;

  // Info Reserva
  reservasPrevias: Reserva[];
  reserva: Reserva;
  fechaIngreso: NgbDateStruct;
  fechaSalida: NgbDateStruct;

  // acompañantes
  numAcompanantes = 0;
  acompanantes: Acompanante[];

  rellenoHabitaciones: string[] = [];

  constructor(private reservaService: ReservaService, private activatedRoute: ActivatedRoute, private router: Router) {
    /*   this.cliente = new Cliente(); */
    this.reserva = new Reserva();
    this.reserva.id_cliente = new Cliente();
    this.reserva.idHabitacion = new Habitacion();
    /*   this.acompanante = new Acompanante(); */
  }

  ngOnInit() {
    this.cargarReserva();

    // carga las reservas previas para que no se puedan escoger reservas
    // en fechas que ya tiene reservas
    this.reservaService.showReservas().subscribe(reservas => {
      this.reservasPrevias = reservas;
      console.log(this.reservasPrevias);
    });
  }

  saveInfoModalCliente() {
    /* console.log(this.cliente); */
  }

  onSelectedFechaIngreso(event: any): Date {
    return new Date(event.year, event.month, event.day);
  }

  onSelectedFechaSalida(event: any): Date {
    console.log(this.fechaIngreso);
    return new Date(event.year, event.month, event.day);
  }

  rellenaHabitacionSegunFechas(event: any) {
    this.rellenoHabitaciones = ['A', 'B', 'C', 'D', 'E', 'F'];
    let incluye = false;
    let i = 0;
    if (this.fechaIngreso && this.fechaSalida) {
      const fi = new Date(this.fechaIngreso.year, this.fechaIngreso.month - 1, this.fechaIngreso.day);
      for (const reservaPrevia of this.reservasPrevias) {
        const firp = new Date(reservaPrevia.fechaIngreso);
        const fsrp = new Date(reservaPrevia.fechaSalida);

        if (fi >= firp && fi <= fsrp) {
          this.rellenoHabitaciones
            .splice(i++, 1, reservaPrevia.idHabitacion.num_habitacion);
          /*  this.rellenoHabitaciones
             .splice(i++, this.rellenoHabitaciones.length - i, reservaPrevia.idHabitacion.num_habitacion); */
          this.rellenoHabitaciones
            .splice(i, this.rellenoHabitaciones.length - i);
          incluye = true;
        }
      }
      if (incluye) {
        this.rellenoHabitaciones = ['A', 'B', 'C', 'D', 'E', 'F']
          .filter(letter => !this.rellenoHabitaciones.includes(letter));
      }

      /*     const selectedRooms = document.getElementById('selectHabitacion').children;
    
          console.dir(selectedRooms); */
    }
  }

  onSelectedRoom(event: any) {
    /*   console.log(this.reserva.idHabitacion); */
    switch (event.target.textContent.trim()) {
      case 'A': this.reserva.idHabitacion.id_habitacion = 1;
        break;
      case 'B': this.reserva.idHabitacion.id_habitacion = 2;
        break;
      case 'C': this.reserva.idHabitacion.id_habitacion = 3;
        break;
      case 'D': this.reserva.idHabitacion.id_habitacion = 4;
        break;
      case 'E': this.reserva.idHabitacion.id_habitacion = 5;
        break;
      case 'F': this.reserva.idHabitacion.id_habitacion = 6;
        break;
    }

    /*    console.log(this.reserva.idHabitacion); */
  }

  saveInfoReserva() {
    /*  console.dir(document.querySelectorAll('.inp'));
     console.dir(this.cliente);
     console.log(this.acompanantes);
     console.log(this.reserva); */
  }

  showAcompanantesInfo() {
    if (this.numAcompanantes > 0) {
      this.acompanantes = new Array(this.numAcompanantes);
      for (let i = 0; i < this.acompanantes.length; i++) {
        this.acompanantes[i] = new Acompanante();
      }
    } else {
      this.acompanantes = [];
    }
  }

  saveInfoAcompanantes() {

    if (this.acompanantes) {
      if (this.validaCamposLlenos(this.acompanantes)) {
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        });
      };
    }

    this.reserva.id_cliente.acompanantes = this.acompanantes;
    /*   this.cliente.acompanantes = this.acompanantes; */
  }

  validaCamposLlenos(acomps: Acompanante[]) {

    for (const acom of acomps) {
      if (Object.keys(acom).length < 3) {
        return false;
      }
    }

    const validadores = acomps.filter(acom => acom.nombre !== '' &&
      acom.numero_documento !== '' &&
      acom.primer_apellido !== '');

    if (validadores.length === acomps.length) {
      return true;
    } else {
      return false;
    }
  }

  onRegistrarReserva() {

    Swal.fire({
      title: 'Desea confirmar esta reserva?',
      text: 'Podrá actualizarla nuevamente',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, registrar reserva'
    }).then(result => {
      if (result.value) {
    /*     this.reserva.estado = 'reservada';
        this.reserva.fechaIngreso = new Date(this.fechaIngreso.year, this.fechaIngreso.month - 1, this.fechaIngreso.day);
        this.reserva.fechaSalida = new Date(this.fechaSalida.year, this.fechaSalida.month - 1, this.fechaSalida.day);
        console.log(this.reserva);
        this.reservaService.createReserva(this.reserva)
          .subscribe(response => {
            console.log(response);
          }); */

          Swal.fire({
            title: 'Reserva hecha con exito!',
            type: 'success'
          });
      }
    });
    /*    this.reserva.estado = 'reservada';
       this.reserva.fechaIngreso = new Date(this.fechaIngreso.year, this.fechaIngreso.month - 1, this.fechaIngreso.day);
       this.reserva.fechaSalida = new Date(this.fechaSalida.year, this.fechaSalida.month - 1, this.fechaSalida.day);
       console.log(this.reserva);
       this.reservaService.createReserva(this.reserva)
         .subscribe(response => {
           console.log(response);
         }); */
  }

  onEditarReserva() {
    console.log(this.reserva);
    this.reservaService.updateReserva(this.reserva).subscribe(reserva => {
      this.router.navigate(['/habitaciones']);
      Swal.fire('Reserva actualizada', `reserva ${reserva.id_reserva} actualizada con exito`, 'success');
    });
  }

  onDeleteReserva(reserva: Reserva) {
    Swal.fire({
      title: 'Desea cancelar esta reserva?',
      text: 'Se borrará su regitro',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cancelar reserva'
    }).then(response => {
      if (response.value) {
        this.reservaService.deleteReserva(reserva.id_reserva);
        Swal.fire('eliminado con exito');
      }
    });
  }

  cleanData(): void {

    const inputsModalCliente = document.querySelectorAll('.modal_form_cliente input');
    Array.from(inputsModalCliente)
      .forEach(input => (input as HTMLInputElement).value = '');
  }


  cargarReserva(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];

      //pregunta si existe el id de la reserva
      if (id) {
        this.reservaService.getReserva(id).subscribe(reserva => {
          this.reserva = reserva;
          console.log(this.reserva.fechaIngreso, this.reserva.fechaSalida);
          /*  console.log(new Date(this.reserva.fechaIngreso).getFullYear()); */
          this.fechaIngreso = new NgbDate(new Date(this.reserva.fechaIngreso).getFullYear(),
            new Date(this.reserva.fechaIngreso).getMonth(),
            new Date(this.reserva.fechaIngreso).getDate());


          this.fechaSalida = new NgbDate(new Date(this.reserva.fechaSalida).getFullYear(),
            new Date(this.reserva.fechaSalida).getMonth(),
            new Date(this.reserva.fechaSalida).getDate());
        });
      }
    });
  }



}
