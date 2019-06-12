import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Medicamento } from 'src/app/modelos/Medicamento';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + localStorage.getItem("token") })
};

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  constructor(private http: HttpClient) { }

  obtenerMedicamentos():Observable<Medicamento[]>{
    return this.http.get<Medicamento[]>("/api/Medicamento/obtenerMedicamentos", httpOptions);
  }

  registrarMedicamento(medicamento: Medicamento):Observable<Medicamento>{
    return this.http.post<Medicamento>("api/Medicamento/registrar", medicamento, httpOptions).pipe(
      catchError(error => {
        return throwError('error');
      })
    );
  }

  editarMedicamento(medicamento: Medicamento){
    return this.http.post("api/Medicamento/editar", medicamento, httpOptions).pipe(
      catchError(error => {
        return throwError('error');
      })
    );
  }

  eliminarMedicamento(idMedicamento: number){
    return this.http.post("api/Medicamento/eliminar", idMedicamento, httpOptions).pipe(
      catchError(error => {
        return throwError('error');
      })
    );
  }
}
