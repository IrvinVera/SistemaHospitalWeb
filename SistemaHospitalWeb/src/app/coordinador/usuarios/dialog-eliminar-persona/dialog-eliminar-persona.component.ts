import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Persona } from 'src/app/modelos/Persona';

@Component({
  selector: 'app-dialog-eliminar-persona',
  templateUrl: './dialog-eliminar-persona.component.html',
  styleUrls: ['./dialog-eliminar-persona.component.css']
})
export class DialogEliminarPersonaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogEliminarPersonaComponent>,
    @Inject(MAT_DIALOG_DATA) public persona: Persona) { }

  ngOnInit() {
  }

}
