import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './modelos/Persona';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Cuenta } from './modelos/Cuenta';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + localStorage.getItem("token") })
};

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  constructor(private http: HttpClient) { }

  obtenerPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>("/api/Persona/obtenerPersonas", httpOptions);
  }

  registrarPersona(cuenta: Cuenta): Observable<Persona> {
    return this.http.post<Persona>("/api/Persona/registrar", cuenta, httpOptions).pipe(
      catchError(error => {
        return throwError('error');
      })
    );
  }

  editarPersona(persona:Persona){
    return this.http.post("api/Persona/editar", persona, httpOptions).pipe(
      catchError(error => {
        return throwError('error');
      })
    );
  }

  eliminarPersona(idPersona: number){
    return this.http.post("api/Persona/eliminar", idPersona, httpOptions).pipe(
      catchError(error => {
        return throwError('error');
      })
    );
  }

  buscarPersona(nombre:string): Observable<Persona>{
    return this.http.get<Persona>("api/Persona/buscarPersonaNombre?nombrePersona="+nombre,httpOptions).pipe(
      catchError(error => {
        return throwError('error');
      })
    );
  }

}
