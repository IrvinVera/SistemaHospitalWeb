import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../../../modelos/Medicamento'
import { MedicamentoImplementacion } from 'src/app/nucleo/medicamento.implementacion';
import { MatDialog } from '@angular/material/dialog';
import { DialogMedicamentoComponent } from '../dialog-medicamento/dialog-medicamento.component'

@Component({
  selector: 'app-lista-medicamentos',
  templateUrl: './lista-medicamentos.component.html',
  styleUrls: ['./lista-medicamentos.component.css']
})
export class ListaMedicamentosComponent implements OnInit {

  medicamentos: Array<Medicamento>;
  medicamentoImplementacion: MedicamentoImplementacion;

  constructor(public dialog: MatDialog) {
    this.medicamentoImplementacion = new MedicamentoImplementacion();
    this.medicamentos = this.medicamentoImplementacion.obtenerMedicamentos();
   }

  ngOnInit() {
  }

  mostrarDialogoMedicamento(medicamento: Medicamento){
    this.dialog.open(DialogMedicamentoComponent, {   
      width: '40%',
      data: medicamento,
    }); 
  }

}
