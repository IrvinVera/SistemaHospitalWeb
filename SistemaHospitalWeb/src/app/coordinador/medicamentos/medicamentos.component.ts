import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Medicamento } from 'src/app/modelos/Medicamento';
import { DialogMedicamentoComponent } from './dialog-medicamento/dialog-medicamento.component';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  mostrarDialogoMedicamento(){
    this.dialog.open(DialogMedicamentoComponent, {   
      width: '40%',
      data: new Medicamento(null, null, null, null, null),
    });
  }

}
