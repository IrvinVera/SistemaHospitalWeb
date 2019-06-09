import { Component, OnInit, Inject } from '@angular/core';
import { Persona } from 'src/app/modelos/Persona';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {NgForm} from '@angular/forms';
import { PersonaImplementacion } from 'src/app/nucleo/persona.implementacion';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-dialog-usuario',
  templateUrl: './dialog-usuario.component.html',
  styleUrls: ['./dialog-usuario.component.css']
})
export class DialogUsuarioComponent implements OnInit {

  accion: string ;
  generos: string[] = ["Masculino", "Femenino"];
  roles: string[] = ["Paciente", "Médico", "Recepcionista"];
  personaEditada: Persona;
  personaImplementacion: PersonaImplementacion;

  constructor(public dialogRef: MatDialogRef<DialogUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public persona: Persona) { 
      this.accion = persona.idPersona ? "Editar" : "Nueva";  
      this.personaImplementacion = new PersonaImplementacion();   
    }

  ngOnInit() {
  }

  guardarInformacion(datosForm: NgForm){    
    if (this.persona.idPersona){
      this.editarPersona(datosForm.value);
    }else{
      this.guardarPersona(datosForm.value);
    }
  }

  guardarPersona(datos){
    
  }

  editarPersona(datos){
    this.personaEditada = this.crearPersona(datos);
    if(this.personaImplementacion.editar(this.personaEditada)){
      this.dialogRef.close({"mensaje":"guardado", "persona": this.personaEditada});
    }else{
      this.dialogRef.close({"mensaje":"error"});
    }
  }

  crearPersona(datos:any){
    return new Persona(this.persona.idPersona, datos.nombre, datos.apellidos,
      datos.correo, datos.telefono,datos.rol, datos.genero, datos.fechaNacimiento);
  }

  cerrarDialog(){    
    this.dialogRef.close({"mensaje":"cancelar"});
  }
}
