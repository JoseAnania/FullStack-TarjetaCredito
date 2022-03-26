import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaApiService {

  // configuramos la URL
  private myAppUrl = "https://localhost:44315/";
  private myApiUrl = "api/Tarjeta/"

  // inyectamos el HttpClient para realizar peticiones http
  constructor(private http: HttpClient) { }

  // petición GET para Listar Tarjetas
  getListTarjetas(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  // petición DELETE para Eliminar Tarjetas
  deleteTarjeta(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  // petición POST para Agregar Tarjetas
  saveTarjeta(tarjeta: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, tarjeta);
  }
}
