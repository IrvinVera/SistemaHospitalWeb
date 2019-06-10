import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './modelos/Persona';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  constructor(private http: HttpClient) { }

  obtenerPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>("/api/Persona/obtenerPersonas");
  }

  registrarPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>("/api/Persona/registrar", persona, httpOptions).pipe(
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

}
