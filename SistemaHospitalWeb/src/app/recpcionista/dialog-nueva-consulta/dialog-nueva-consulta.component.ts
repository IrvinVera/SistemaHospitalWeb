import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Paciente } from 'src/app/modelos/Paciente';
import { PersonaService } from 'src/app/persona.service';
import { ListaEsperaService } from 'src/app/servicios/lista.espera/lista-espera.service';

@Component({
  selector: 'app-dialog-nueva-consulta',
  templateUrl: './dialog-nueva-consulta.component.html',
  styleUrls: ['./dialog-nueva-consulta.component.css']
})



export class DialogNuevaConsultaComponent implements OnInit {
  myControl = new FormControl();    
  nombrePaciente: string;
  pacientesFiltrados: Observable<Paciente[]>;
  pacientes: Paciente[] = [];

  constructor(public dialogRef: MatDialogRef<DialogNuevaConsultaComponent>, 
    private personaService: PersonaService, private listaService: ListaEsperaService) {     
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
      this.personaService.buscarPersona(this.nombrePaciente).subscribe(
        persona => this.pacientes.push(persona)
      );      
      this.iniciarInputAutocompletado(); 
    }       
  }

  obtenerNombreCompleto(paciente:Paciente){
    return paciente.nombre + " " + paciente.apellidos;
  }

  agregarPaciente(){
    if(this.pacientes.length > 0){
      this.listaService.agregarConsulta(this.pacientes[0].idPersona).subscribe(
        respuesta =>  this.dialogRef.close({"mensaje":"agregado", "paciente": this.pacientes[0]}),
        error => this.dialogRef.close({"mensaje":"error", "paciente":""})
      );     
    }
  }

  cerrarDialog(){
    this.dialogRef.close({"mensaje":"cancelar"});
  }

}
