import { Component, OnInit, Input } from '@angular/core';
import { Habitacion } from 'src/app/modelos/Habitacion';
import { ModalHabitacionService } from 'src/app/services/modal-habitacion.service';

@Component({
  selector: 'app-detalle-habitacion',
  templateUrl: './detalle-habitacion.component.html',
  styleUrls: ['./detalle-habitacion.component.css']
})
export class DetalleHabitacionComponent implements OnInit {

  @Input()
  habitacion: Habitacion;

  constructor(private modalHabitacionService: ModalHabitacionService) { }

  ngOnInit() {
    console.log(this.modalHabitacionService.modal);
  }

  cerrarModal() {
    this.modalHabitacionService.cerrarModal();
  }
}
