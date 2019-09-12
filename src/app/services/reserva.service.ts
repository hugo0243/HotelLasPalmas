import { Injectable } from '@angular/core';
import {HttpClient, HttpDownloadProgressEvent} from '@angular/common/http';
import { Reserva } from '../modelos/Reserva';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  reservas: Reserva[];
   URL = 'http://localhost:8080/hotel-campestre/api/reservas';

  constructor(private http: HttpClient) { }

  showReservas(): Observable<Reserva[]> {

    return this.http.get<Reserva[]>(this.URL);

  }
}
