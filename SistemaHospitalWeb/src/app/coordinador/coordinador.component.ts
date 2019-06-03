import { Component } from '@angular/core';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { ConsultoriosComponent } from './consultorios/consultorios.component';

@Component({
  selector: 'app-coordinador',
  templateUrl: './coordinador.component.html',
  styleUrls: ['./coordinador.component.css']
})
export class CoordinadorComponent {
  titulo:string;
  componenteACargar: any;
  opened: boolean;

  constructor() {
    this.componenteACargar = UsuariosComponent;
    this.titulo = "Usuarios";
  }

  abrirNavbar(){
    this.opened = true;
  }

  cargarComponenteUsuarios(){
    this.componenteACargar = UsuariosComponent;
    this.titulo = "Usuarios";
  }

  cargarComponenteMedicamntos(){
    this.componenteACargar = MedicamentosComponent;
    this.titulo = "Medicamentos";
  }

  cargarComponenteConsultorios(){
    this.componenteACargar = ConsultoriosComponent;
    this.titulo = "Consultorios";
  }
}
