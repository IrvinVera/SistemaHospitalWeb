import { Component, OnInit } from '@angular/core';
import { Persona } from '../../../modelos/Persona';
import { PersonaImplementacion } from '../../../nucleo/persona.implementacion';
import { MatDialog } from '@angular/material/dialog';
import { DialogUsuarioComponent } from '../dialog-usuario/dialog-usuario.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  
  personas: Array<Persona>;
  personaImp: PersonaImplementacion;
  personaSeleccionada: Persona;

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {
    this.personaImp = new PersonaImplementacion();
    this.personas = this.personaImp.obtenerTodos();
   }

  ngOnInit() {
  }

  mostrarDialogoUsuario(persona: Persona){
    const dialogUsuario = this.dialog.open(DialogUsuarioComponent, {   
      width: '40%',
      data: persona,
    });
    this.personaSeleccionada = persona;
    dialogUsuario.afterClosed().subscribe(result => {
      this.mostrarMesajeGuardado(result);
    });
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
        this.crearMensaje("Persona actualizada")
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
