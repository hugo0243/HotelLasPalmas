import { Habitacion } from './Habitacion';
import { Cliente } from './Cliente';

export class Reserva{

    constructor(public id_reserva:number, public id_cliente: Cliente,
        public id_empleado: string, public fechaReserva: Date,
        public fechaIngreso: string, public fechaSalida: string,
        public observacion: string, public idHabitacion: Habitacion,
        public estado: string ){}
}
