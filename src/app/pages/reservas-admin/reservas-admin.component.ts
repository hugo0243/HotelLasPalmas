import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Acompanante } from 'src/app/modelos/Acompanante';
import { Cliente } from 'src/app/modelos/Cliente';
import { Reserva } from 'src/app/modelos/Reserva';

import { ReservaService } from 'src/app/services/reserva.service';


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
 /*  acompanante: Acompanante; */
  numAcompanantes = 0;
  acompanantes: Acompanante[];
 /*  nombreAcompanante: string;
  apellidoAcompanante: string;
  numDocumentoAcompanante: string; */
  rellenoHabitaciones: string[];

  constructor(private reservaService: ReservaService) {
    this.cliente = new Cliente();
    this.reserva = new Reserva();
  /*   this.acompanante = new Acompanante(); */
   }

  ngOnInit() {
    this.reservaService.showReservas().subscribe(reservas=>{
      this.reservasPrevias = reservas;
      console.log(this.reservasPrevias);
    });
    
 /*    this.rellenaHabitacionSegunFechas(); */
  }

  saveInfoModalCliente() {
    console.log(this.cliente);
  }

  onSelectedFechaIngreso(event: any): Date{
    return new Date(event.year, event.month, event.day);
  }

  onSelectedFechaSalida(event: any): Date {
    console.log(this.fechaIngreso);
    return new Date(event.year, event.month, event.day);
  }

  rellenaHabitacionSegunFechas(event: any) {
     
    if(this.fechaIngreso && this.fechaSalida) {
      const fi = new Date(this.fechaIngreso.year,this.fechaIngreso.month,this.fechaIngreso.day);
      const fs = new Date(this.fechaSalida.year,this.fechaSalida.month,this.fechaSalida.day);
      
 

     for(let i=0 ; i< this.reservasPrevias.length; i++){

      //console.log(new Date(this.reservasPrevias[i].fechaIngreso).getFullYear());
         if(fi.getFullYear() == new Date(this.reservasPrevias[i].fechaIngreso).getFullYear() 
         && fi.getMonth() == new Date(this.reservasPrevias[i].fechaIngreso).getMonth()+1 
         && fi.getDate() == new Date(this.reservasPrevias[i].fechaIngreso).getDate())
        /*  console.log(new Date(this.reservasPrevias[i].fechaIngreso).getDate()); */
            this.rellenoHabitaciones.push(this.reservasPrevias[i].idHabitacion.num_habitacion); 
        
  /*        && fi.getMonth() == new Date(this.reservasPrevias[i].fechaIngreso).getMonth()
         && fi.getDate() == new Date(this.reservasPrevias[i].fechaIngreso).getDate())  */
         /*  r.push(this.reservasPrevias[i].idHabitacion.num_habitacion); */
         
     }
  
     }
    
    } 
    
   /* const fs = new Date(this.fechaSalida.year,this.fechaSalida.month,this.fechaSalida.day); */
 /*    const selectHabitacion = document.getElementById('selectHabitacion').chi; */
    
 

saveInfoReserva() {
 /*  console.dir(document.querySelectorAll('.inp'));
  console.dir(this.cliente);
  console.log(this.acompanantes);
  console.log(this.reserva); */
}

showAcompanantesInfo() {
    if (this.numAcompanantes > 0) {
    this.acompanantes = new Array(this.numAcompanantes);
      for(let i=0; i<this.acompanantes.length; i++)
    {
      this.acompanantes[i]=new Acompanante();
    }  
     /*  this.acompanantes.forEach(a=>console.log(a.getId()));  */
    } else {
      this.acompanantes = [];
    }
}

saveInfoAcompanantes() {
  this.cliente.acompanantes = this.acompanantes;
}

cleanData() {
  
  const inputsModalCliente = document.querySelectorAll('.modal_form_cliente input');
   Array.from(inputsModalCliente)
  .forEach( input => (input as HTMLInputElement).value = '');
}

}
