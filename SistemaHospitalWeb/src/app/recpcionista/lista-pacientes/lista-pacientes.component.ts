import { Component, OnInit } from '@angular/core';
import { Paciente } from "src/app/modelos/Paciente";
import { ListaEsperaNucleo } from 'src/app/nucleo/listaEspera.nucleo';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  listaEspera: ListaEsperaNucleo;
  pacientesEspera: Array<Paciente>;

  constructor() {
    this.listaEspera = new ListaEsperaNucleo();
    this.pacientesEspera = this.listaEspera.mostrar();
   }

  ngOnInit() {
  }

  esHombre(genero:string){
    return genero === "M" ? true : false;
  }

  cancelarConsulta(paciente){
    console.log(this.pacientesEspera.indexOf(paciente));
    //this.pacientesEspera.pop();
  }

}
