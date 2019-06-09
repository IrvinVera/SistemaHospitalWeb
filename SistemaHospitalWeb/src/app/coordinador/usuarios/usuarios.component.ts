import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogUsuarioComponent } from './dialog-usuario/dialog-usuario.component';
import { Persona } from 'src/app/modelos/Persona';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  mostrarDialogoUsuario(){
    this.dialog.open(DialogUsuarioComponent, {   
      width: '40%',
      data: new Persona(null,"","","","","","",null),
    }); 
  }

}
