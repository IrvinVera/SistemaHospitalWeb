import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Medicamento } from 'src/app/modelos/Medicamento';

@Component({
  selector: 'app-dialog-medicamento',
  templateUrl: './dialog-medicamento.component.html',
  styleUrls: ['./dialog-medicamento.component.css']
})
export class DialogMedicamentoComponent implements OnInit {

  accion: string;

  constructor(public dialogRef: MatDialogRef<DialogMedicamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public medicamento: Medicamento ) { 
      this.accion = medicamento.idMedicamento ? "Editar" : "Nuevo";      
    }

  ngOnInit() {
  }

}
