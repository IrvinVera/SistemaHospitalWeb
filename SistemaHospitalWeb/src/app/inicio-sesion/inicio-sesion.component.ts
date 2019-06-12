import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login/login.service';
import { Cuenta } from '../modelos/Cuenta';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Autorizacion } from '../utilerias/Autorizacion';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  cuenta: Cuenta = new Cuenta(0,"","", null);
  autorizacion: Autorizacion;
  constructor(private loginService: LoginService, private router: Router,
    private snackbar :MatSnackBar) { }

  ngOnInit() {
    this.autorizacion = new Autorizacion(this.router);
  }

  iniciarSesion(datos: NgForm){
    this.cuenta.nombreUsuario = datos.value.nombreUsuario;
    this.cuenta.contrasena = datos.value.contrasena;
    this.loginService.iniciarSesion(this.cuenta).subscribe(
      respuesta =>{
        localStorage.setItem("token", respuesta.token);
        localStorage.setItem("idPersona", respuesta.idPersona);
        localStorage.setItem("rol",respuesta.rol); 
        this.autorizacion.cargarPantalla();       
      } ,
      error => {
        this.snackbar.open("Usuario/Contraseña incorrectos", "Cerrar", {
          duration: 3000,
        }); 
      }
    );
  }



}
