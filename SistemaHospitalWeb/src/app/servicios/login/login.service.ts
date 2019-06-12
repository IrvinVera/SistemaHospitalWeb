import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cuenta } from 'src/app/modelos/Cuenta';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  iniciarSesion(cuenta: Cuenta){
    return this.http.post<any>("api/Cuenta/login", cuenta, httpOptions).pipe(
      catchError(error => {
        return throwError('error');
      })
    );
  }

  cerrarSesion(){
    localStorage.removeItem("token");
    localStorage.removeItem("idPersona");
    localStorage.removeItem("rol");
    return true;
  }
}
