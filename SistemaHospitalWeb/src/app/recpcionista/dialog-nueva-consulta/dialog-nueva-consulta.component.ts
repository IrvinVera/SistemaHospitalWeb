import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {FormControl} from '@angular/forms';

export interface Paciente {
  imagen: string;
  name: string;
  id: string;
}

@Component({
  selector: 'app-dialog-nueva-consulta',
  templateUrl: './dialog-nueva-consulta.component.html',
  styleUrls: ['./dialog-nueva-consulta.component.css']
})



export class DialogNuevaConsultaComponent implements OnInit {
  myControl = new FormControl();
  options: Paciente[] = [{imagen: './././assets/img/avatarHombre.png', name: 'Irvin Dereb Vera López', id: '1'},
  {imagen: './././assets/img/avatarHombre.png', name: 'Raymundo de Jesús Pérez Castellanos', id: '2'}];

  constructor(public dialogRef: MatDialogRef<DialogNuevaConsultaComponent>) { }  

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  /*buscarPaciente(): void{
    this.options = ['One','Two', 'Three'];
  }*/

}
