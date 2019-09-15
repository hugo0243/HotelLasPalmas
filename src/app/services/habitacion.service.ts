import { Injectable } from '@angular/core';
import {Habitacion} from '../modelos/Habitacion';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
/* import {map} from 'rxjs/operators'; */

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  habitaciones : Habitacion[] ;
  h: Habitacion;

 /*  private URL: string = 'http://localhost:8080/hotel-campestre/api/habitaciones'; */

 private URL: string = 'http://192.168.0.15:8080/hotel-campestre/api/habitaciones';

  constructor(private http: HttpClient) { }

   getHabitaciones(): Observable<Habitacion[]> {
/*     return of(); */
   return this.http.get<Habitacion[]>(this.URL);

    // OTRA FORMA pipe perrmite agregar más operadores
/*     this.http.get(this.URL).pipe(
      map(response => response as Habitacion[]))
      .subscribe(habitacion => this.h = habitacion[0]);

      setTimeout(() => {
        console.log(this.h.id_habitacio);
      }, 4000); */
    
    /*  console.log(this.habitaciones); */ 
  } 
}
