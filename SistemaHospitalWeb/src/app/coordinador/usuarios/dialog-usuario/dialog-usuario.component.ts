import { Component, OnInit, Inject } from '@angular/core';
import { Persona } from 'src/app/modelos/Persona';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { PersonaService } from 'src/app/persona.service';


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

  constructor(public dialogRef: MatDialogRef<DialogUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public persona: Persona, private personaService: PersonaService) { 
      this.accion = persona.idPersona ? "Editar" : "Nueva";  
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
    this.personaEditada = this.crearPersona(datos);
    this.personaService.registrarPersona(this.personaEditada).subscribe(
      persona => { this.dialogRef.close({"mensaje":"guardado", "persona": persona}); }, 
      error =>{ this.dialogRef.close({"mensaje":error}); }
    );
  }

  editarPersona(datos){
    this.personaEditada = this.crearPersona(datos);
    this.personaService.editarPersona(this.personaEditada).subscribe(
      respuesta => { this.dialogRef.close({"mensaje":"guardado", "persona": this.personaEditada}); },
      error => { this.dialogRef.close({"mensaje": error}); }
    );
  }

  crearPersona(datos:any){
    return new Persona((this.persona.idPersona ? this.persona.idPersona: 0 ), datos.nombre, datos.apellidos,
      datos.correo, datos.telefono,datos.rol, datos.genero, datos.fechaNacimiento);
  }

  cerrarDialog(){    
    this.dialogRef.close({"mensaje":"cancelar"});
  }
}
