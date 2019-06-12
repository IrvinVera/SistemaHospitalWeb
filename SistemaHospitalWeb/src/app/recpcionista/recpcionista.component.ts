import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogNuevaConsultaComponent } from './dialog-nueva-consulta/dialog-nueva-consulta.component'
import { ListaEsperaService } from '../servicios/lista.espera/lista-espera.service';
import { Persona } from '../modelos/Persona';
import { NotificacionesService } from '../servicios/notificaciones/notificaciones.service';
import { MatSnackBar } from '@angular/material';
import { DialogCancelarConsultaComponent } from './dialog-cancelar-consulta/dialog-cancelar-consulta.component';
import { Router } from '@angular/router';
import { Autorizacion } from '../utilerias/Autorizacion';

@Component({
  selector: 'app-recpcionista',
  templateUrl: './recpcionista.component.html',
  styleUrls: ['./recpcionista.component.css']
})
export class RecpcionistaComponent implements OnInit {

  pacientes: Persona[];
  autorizacion: Autorizacion;

  constructor(public dialog: MatDialog, private listaEsperaService: ListaEsperaService,
    private notificanionesService: NotificacionesService, private _snackBar: MatSnackBar,
    private router: Router) { }


  ngOnInit() {
    this.autorizacion = new Autorizacion(this.router);
    if(localStorage.getItem("rol")!= "Recepcionista"){
      this.autorizacion.cargarPantalla();
    }else{
      this.mostrarPersonasEspera();
      this.notificanionesService.startConnection();
      this.notificanionesService.agregarnoticicacion();  
    }      
  }

  mostrarPersonasEspera(){
    this.listaEsperaService.obtenerPacientes().subscribe(
      personas => this.pacientes = personas
    );
  }

  esHombre(genero:string){
    return genero === "Masculino" ? true : false;
  }

  mostrarDialogoNuevaConsulta() {
    var dialogNuevaConsulta = this.dialog.open(DialogNuevaConsultaComponent, {   
      width: '35%'
    });   
    
    dialogNuevaConsulta.afterClosed().subscribe(
      respuesta => {              
        if (respuesta.mensaje == "agregado"){
          this.pacientes.push(respuesta.paciente);
          this.crearMensaje("Consulta agregada");
        }

        if (respuesta.mensaje == "error"){
          this.crearMensaje("El paciente ya esta en lista de espera");
        }
      }              
    )
  }

  crearMensaje(mensaje:string){
    this._snackBar.open(mensaje, "Cerrar", {
      duration: 3000,
    }); 
  }

  mostrarDialogoCancelarConsulta(pacienteSeleccionado){
    const dialogoCancelarConsulta = this.dialog.open(DialogCancelarConsultaComponent, {   
      data: pacienteSeleccionado
    });

    dialogoCancelarConsulta.afterClosed().subscribe(result => {
      if(result){
        this.cancelarConsulta(pacienteSeleccionado);
      }
    });
  } 

  cancelarConsulta(paciente: Persona){
    this.listaEsperaService.cancelarConsulta(paciente.idPersona).subscribe(
      respuesta=> {
        let indice = this.pacientes.indexOf(paciente);
        this.pacientes.splice(indice, 1);
        this.crearMensaje("Consulta cancelada");
      },
      error => this.crearMensaje("Error al cancelar la consulta")
    );
    
  }

}
