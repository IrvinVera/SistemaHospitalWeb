import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogUsuarioComponent } from './dialog-usuario/dialog-usuario.component';
import { DialogEliminarPersonaComponent } from './dialog-eliminar-persona/dialog-eliminar-persona.component'
import { Persona } from 'src/app/modelos/Persona';
import { PersonaService } from 'src/app/persona.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  personas: Persona[];
  personaSeleccionada: Persona;

  constructor(public dialog: MatDialog, private personaService: PersonaService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.mostrarUsuarios();
  }

  mostrarUsuarios(){
    this.personaService.obtenerPersonas().subscribe(personas => this.personas = personas);
  }

  mostrarDialogoUsuario(){
    var dialogPersona = this.dialog.open(DialogUsuarioComponent, {   
      width: '40%',
      data: new Persona(null,"","","","","","",null),
    });        

    dialogPersona.afterClosed().subscribe(result =>{
      if(result.mensaje == "guardado"){
        this.personas.push(result.persona);
        this.crearMensaje("Persona guardada");
      }
      if (result.mensaje == "error"){
        this.crearMensaje("Error al guardar persona");
      }
    });
  }

  mostrarDialogoUsuarioEditar(persona: Persona){
    const dialogUsuario = this.dialog.open(DialogUsuarioComponent, {   
      width: '40%',
      data: persona,
    });
    this.personaSeleccionada = persona;
    dialogUsuario.afterClosed().subscribe(result => {
      this.mostrarMesajeGuardado(result);
    });
  }

  mostrarDialogEliminar(persona: Persona){
    this.personaSeleccionada = persona;
    var dialogEliminar = this.dialog.open(DialogEliminarPersonaComponent, {
      data: persona
    });
    
    dialogEliminar.afterClosed().subscribe(respuesta => {
      if (respuesta){
        this.eliminarPersona();
      }
    });
  }

  eliminarPersona(){
    this.personaService.eliminarPersona(this.personaSeleccionada.idPersona).subscribe(
      resultado => {
        var index = this.personas.indexOf(this.personaSeleccionada);
        this.personas.slice(index, 1);
        this.crearMensaje("Persona eliminada");
      },
      error => { this.crearMensaje("Error al eliminar persona"); }
    );
  }

  editarDatosPersona(datos:any){
    this.personaSeleccionada.nombre = datos.nombre;
    this.personaSeleccionada.apellidos = datos.apellidos;
    this.personaSeleccionada.correo = datos.correo;
    this.personaSeleccionada.telefono = datos.telefono;
    this.personaSeleccionada.rol = datos.rol;
    this.personaSeleccionada.genero = datos.genero;
    this.personaSeleccionada.fechaNacimiento = datos.fechaNacimiento;
  }

  mostrarMesajeGuardado(seGuardo){
    switch(seGuardo.mensaje){
      case "guardado":
        this.editarDatosPersona(seGuardo.persona);
        this.crearMensaje("Persona actualizada");
        break;
      case "error":
        this.crearMensaje("Error al actualizar persona");
      break;
      default:
        break;
    }    
  }

  crearMensaje(mensaje:string){
    this._snackBar.open(mensaje, "Cerrar", {
      duration: 3000,
    }); 
  }

}
