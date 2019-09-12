import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Acompanante } from 'src/app/modelos/Acompanante';

@Component({
  selector: 'app-reservas-admin',
  templateUrl: './reservas-admin.component.html',
  styleUrls: ['./reservas-admin.component.css']
})
export class ReservasAdminComponent implements OnInit {

  fechaIngreso: NgbDateStruct;
  fechaSalida: NgbDateStruct;

  // acompañantes
  numAcompanantes = 0;
  acompanantes: Acompanante[];

  constructor() { }

  ngOnInit() {
  }

showAcompanantesInfo() {
    if (this.numAcompanantes > 0) {
      this.acompanantes = new Array(this.numAcompanantes);
    }
    else {
      this.acompanantes = [];
    }
}

}
