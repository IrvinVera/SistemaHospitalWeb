import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Paciente } from "src/app/modelos/Paciente";

@Component({
  selector: 'app-dialog-cancelar-consulta',
  templateUrl: './dialog-cancelar-consulta.component.html',
  styleUrls: ['./dialog-cancelar-consulta.component.css']
})
export class DialogCancelarConsultaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogCancelarConsultaComponent>,
    @Inject(MAT_DIALOG_DATA) public paciente: Paciente) { }

  ngOnInit() {
  }
}
