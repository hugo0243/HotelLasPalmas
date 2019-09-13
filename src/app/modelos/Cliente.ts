import { Acompanante } from './Acompanante';

export class Cliente {

	nombre: string;
	segundo_nombre: string;//puede ser null
	primer_apellido: string;
	segundo_apellido: string;
	direccion: string;// puede ser null
	telefono: string;
	email: string;
	numdocumento: string;
	acompanantes: Acompanante[];

	/*     "nombre": "Diana",
		"segundo_nombre": "Lorena",
		"primer_apellido": "Diaz",
		"segundo_apellido":"Torres",
		"direccion":"calle 45",
		"telefono": "322450083",
		"email" :"diana@gmail.com",
		"numdocumento": "102345343" */
	/* } */
}