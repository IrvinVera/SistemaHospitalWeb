import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Persona } from 'src/app/modelos/Persona';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + localStorage.getItem("token") })
};

@Injectable({
  providedIn: 'root'
})
export class ListaEsperaService {

  constructor(private http: HttpClient) { }

  obtenerPacientes():Observable<Persona[]>{
    return this.http.get<Persona[]>("api/ListaEspera/obtenerTodosLosPacientes", httpOptions);
  }

  cancelarConsulta(idPersona:number){
    return this.http.post("api/ListaEspera/remover?idPersona="+ idPersona, idPersona, httpOptions).pipe(
      catchError(error => {
        return throwError('error');
      })
    );
  }

  agregarConsulta(idPersona: number){
    return this.http.post("api/ListaEspera/agregar?idPersona="+idPersona, idPersona, httpOptions).pipe(
      catchError(error => {
        return throwError('error');
      })
    );
  }
}
