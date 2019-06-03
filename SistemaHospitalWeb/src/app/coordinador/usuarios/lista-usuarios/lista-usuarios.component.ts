import { Component, OnInit } from '@angular/core';
import { Persona } from '../../../modelos/Persona';
import { PersonaImplementacion } from '../../../nucleo/persona.implementacion';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  
  personas: Array<Persona>;
  personaImp: PersonaImplementacion;

  constructor() {
    this.personaImp = new PersonaImplementacion();
    this.personas = this.personaImp.obtenerTodos();
    console.table(this.personas);
   }

  ngOnInit() {
  }

}
