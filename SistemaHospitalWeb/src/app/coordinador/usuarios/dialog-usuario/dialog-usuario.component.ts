import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/Persona';

@Component({
  selector: 'app-dialog-usuario',
  templateUrl: './dialog-usuario.component.html',
  styleUrls: ['./dialog-usuario.component.css']
})
export class DialogUsuarioComponent implements OnInit {

  accion: string = "Nueva";
  generos: string[] = ["Masculino", "Femenino"];
  roles: string[] = ["Paciente", "Médico", "Recepcionista"];
  persona: Persona = new Persona(null, "", "", "", "", "", "", null);

  constructor() { }

  ngOnInit() {
  }

  mostrarPersona(){
    console.log(this.persona);
  }
}
