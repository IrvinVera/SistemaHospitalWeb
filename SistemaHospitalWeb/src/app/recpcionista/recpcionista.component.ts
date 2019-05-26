import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogNuevaConsultaComponent } from './dialog-nueva-consulta/dialog-nueva-consulta.component'

@Component({
  selector: 'app-recpcionista',
  templateUrl: './recpcionista.component.html',
  styleUrls: ['./recpcionista.component.css']
})
export class RecpcionistaComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(DialogNuevaConsultaComponent, {   
    });     
  }

}
