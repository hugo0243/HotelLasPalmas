import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Reserva } from '../modelos/Reserva';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private reservas: Reserva[];
  private URL = 'http://localhost:8080/hotel-campestre/api/reservas';
/* private URL: string = 'http://192.168.0.15:8080/hotel-campestre/api/reservas'; */
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
   }

  // retorna todas las reservas
  showReservas(): Observable<Reserva[]> {

    return this.http.get<Reserva[]>(this.URL);

  }

  getReservasPaginadas(page: number = 0): Observable<any> {
    return this.http.get(`${this.URL}/page/${page}`).pipe(
      tap((response: any) => {
        (response.content as Reserva[]).forEach(console.log);
      })
    );
  }

  // crea una nueva reserva
  createReserva(reserva: Reserva): Observable<Reserva> {
   return this.http.post<Reserva>(this.URL, reserva, {headers: this.httpHeaders});
  }

  getReserva(id): Observable<Reserva>{
   return this.http.get<Reserva>(`${this.URL}/${id}`);
  }

  updateReserva(reserva: Reserva): Observable<Reserva> {
    console.log(`${this.URL}/${reserva.id_reserva}`);
    return this.http.put<Reserva>(`${this.URL}/${reserva.id_reserva}`, reserva, {headers: this.httpHeaders});
  }

  deleteReserva(id: number): Observable<Reserva> {
    return this.http.delete<Reserva>(`${this.URL}/${id}`,{headers: this.httpHeaders});
  }
}
