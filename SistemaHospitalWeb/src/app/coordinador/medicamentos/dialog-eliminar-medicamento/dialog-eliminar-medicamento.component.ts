import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Medicamento } from 'src/app/modelos/Medicamento';

@Component({
  selector: 'app-dialog-eliminar-medicamento',
  templateUrl: './dialog-eliminar-medicamento.component.html',
  styleUrls: ['./dialog-eliminar-medicamento.component.css']
})
export class DialogEliminarMedicamentoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogEliminarMedicamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public medicamento: Medicamento) { }

  ngOnInit() {
  }

}
