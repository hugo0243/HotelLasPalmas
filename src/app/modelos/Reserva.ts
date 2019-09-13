import { Habitacion } from './Habitacion';
import { Cliente } from './Cliente';

export class Reserva{

    id_reserva: number;
    id_cliente: Cliente;
    id_empleado: string;
    fechaReserva: Date;
    fechaIngreso: Date;
    fechaSalida: Date;
    observacion: string;
    idHabitacion: Habitacion;
    estado: string;
}
