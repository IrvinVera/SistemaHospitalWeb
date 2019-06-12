import { Component, OnInit } from '@angular/core';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { ConsultoriosComponent } from './consultorios/consultorios.component';
import { Autorizacion } from '../utilerias/Autorizacion';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login/login.service';

@Component({
  selector: 'app-coordinador',
  templateUrl: './coordinador.component.html',
  styleUrls: ['./coordinador.component.css']
})
export class CoordinadorComponent implements OnInit {
  titulo:string;
  componenteACargar: any;
  opened: boolean;
  autorizacion: Autorizacion;

  constructor(private router: Router, private loginService: LoginService) {
    this.componenteACargar = UsuariosComponent;
    this.titulo = "Usuarios";
  }

  ngOnInit() {
    this.autorizacion = new Autorizacion(this.router);
    if(localStorage.getItem("rol") != "Coordinador")
      this.autorizacion.cargarPantalla();
  }

  abrirNavbar(){
    this.opened = true;
  }

  cerrarNavbar(){
    this.opened = false;
  }

  cargarComponenteUsuarios(){
    this.componenteACargar = UsuariosComponent;
    this.titulo = "Usuarios";
    this.cerrarNavbar();
  }

  cargarComponenteMedicamntos(){
    this.componenteACargar = MedicamentosComponent;
    this.titulo = "Medicamentos";
    this.cerrarNavbar();
  }

  cargarComponenteConsultorios(){
    this.componenteACargar = ConsultoriosComponent;
    this.titulo = "Consultorios";
    this.cerrarNavbar();
  }

  cerrarSesion(){
    this.loginService.cerrarSesion();
    this.autorizacion.cargarPantalla();
  }
}
