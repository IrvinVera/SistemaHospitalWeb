import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { PacienteNucleo } from '../../nucleo/paciente.nucleo'
import { Paciente } from 'src/app/modelos/Paciente';

@Component({
  selector: 'app-dialog-nueva-consulta',
  templateUrl: './dialog-nueva-consulta.component.html',
  styleUrls: ['./dialog-nueva-consulta.component.css']
})



export class DialogNuevaConsultaComponent implements OnInit {
  myControl = new FormControl();  
  pacienteNucleo = new PacienteNucleo();
  nombrePaciente: string;
  pacientesFiltrados: Observable<Paciente[]>;
  pacientes: Paciente[];

  constructor(public dialogRef: MatDialogRef<DialogNuevaConsultaComponent>) {     
  }  

  private iniciarInputAutocompletado(){
    this.pacientesFiltrados = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(paciente => paciente ? this._pacientesFiltrados(paciente) : this.pacientes.slice())
      );
  }

  private _pacientesFiltrados(value: string): Paciente[] {
    const filterValue = value.toLowerCase();

    return this.pacientes.filter(paciente => paciente.nombre.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
  }

  buscarPaciente(): void{    
    if(this.nombrePaciente){
      this.pacientes = this.pacienteNucleo.buscarPorNombre(this.nombrePaciente);
      this.iniciarInputAutocompletado(); 
    }       
  }

  obtenerNombreCompleto(paciente:Paciente){
    return paciente.nombre + " " + paciente.apellidos;
  }

}
