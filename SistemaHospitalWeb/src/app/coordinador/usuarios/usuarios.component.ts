import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogUsuarioComponent } from './dialog-usuario/dialog-usuario.component'

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
      width: '35%'
    }); 
  }

}
