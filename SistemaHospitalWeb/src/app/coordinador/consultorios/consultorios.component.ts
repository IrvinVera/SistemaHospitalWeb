import { Component, OnInit } from '@angular/core';
import { Consultorio } from 'src/app/modelos/Consultorio';
import { Persona } from 'src/app/modelos/Persona';
import { ConsultorioService } from 'src/app/servicios/consultorio/consultorio.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DialogConsultorioComponent } from './dialog-consultorio/dialog-consultorio.component';

@Component({
  selector: 'app-consultorios',
  templateUrl: './consultorios.component.html',
  styleUrls: ['./consultorios.component.css']
})
export class ConsultoriosComponent implements OnInit {

  consultorios: Consultorio[];

  constructor(private consultorioService: ConsultorioService, public dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.mostrarConsultorios();
  }

  mostrarConsultorios(){
    this.consultorioService.obtenerConsultorios().subscribe(
      consultorios => {this.consultorios = consultorios;
      console.log(consultorios)}
    );    
    
  }

  hayMedicoAsignado(persona: Persona){
    return persona ? true: false;
  }

  asignarMedico(consultorio:Consultorio, persona:Persona){
    this.consultorioService.asignarDoctor(consultorio.idConsultorio ,persona.idPersona);
  }

  quitarMedico(consultorio:Consultorio){
    this.consultorioService.quitarDoctor(consultorio.idConsultorio);
  }

  mostrarDialogEliminar(consultorio: Consultorio){

  }

  mostrarDialogoConsultorio(){
    var dialogConsultorio = this.dialog.open(DialogConsultorioComponent);
    dialogConsultorio.afterClosed().subscribe(
      respuesta => {
        if(respuesta.mensaje == "guardado"){
          this.consultorios.push(respuesta.consultorio);
          this.crearMensaje("Consultorio guardado");
        }

        if(respuesta.mensaje == "error"){
          this.crearMensaje("Error al guardar consultorio");
        }
      }
    );
  }

  crearMensaje(mensaje:string){
    this._snackBar.open(mensaje, "Cerrar", {
      duration: 3000,
    }); 
  }
}