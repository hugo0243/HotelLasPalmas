import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URLEndPoint = 'http://localhost:8080/hotel-campestre/api/empleado';

  constructor(private http: HttpClient) { }

  validaUsuarioPassword(usuario: string, password: string): Observable<any> {
    return  this.http.get(`${this.URLEndPoint}/${usuario}/${password}`);
  }
}
