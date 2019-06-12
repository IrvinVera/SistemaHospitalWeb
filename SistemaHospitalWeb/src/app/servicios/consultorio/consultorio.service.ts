import { Injectable } from '@angular/core';
import { Consultorio } from 'src/app/modelos/Consultorio';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 
  'Authorization': 'Bearer ' + localStorage.getItem("token") })
};

@Injectable({
  providedIn: 'root'
})
export class ConsultorioService {

  constructor(private http: HttpClient) { }

  obtenerConsultorios():Observable<Consultorio[]>{
    return this.http.get<Consultorio[]>("api/Consultorio/obtenerTodosLosConsultorios");
  }

  registrarConsultorio(consultorio: Consultorio):Observable<Consultorio>{
    return this.http.post<Consultorio>("api/Consultorio/registrar", consultorio, httpOptions).pipe(
      catchError(error => {
        return throwError('error');
      })
    );
  }

  editarEstado(idConsultorio:number){
    return this.http.post("api/Consultorio/editarEstado", idConsultorio, httpOptions).pipe(
      catchError(error => {
        return throwError('error');
      })
    );
  }

  asignarDoctor(idConsultorio: number, idPersona: number){
    return this.http.post("api/Consultorio/asignarDoctor", {"idConsultorio": idConsultorio,
      "idPersona": idPersona}, httpOptions).pipe(
        catchError(error => {
          return throwError('error');
        })                     
      );
  }

  quitarDoctor(idConsultorio: number){
    return this.http.post("api/Consultorio/quitarDoctor", idConsultorio, httpOptions).pipe(
      catchError(error => {
        return throwError('error');
      })
    );
  }

  eliminarConsultorio(idConsultorio: number){
    return this.http.post("api/Consultorio/eliminar", idConsultorio, httpOptions).pipe(
      catchError(error => {
        return throwError('error');
      })
    );
  }
}
