import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Medicamento } from 'src/app/modelos/Medicamento';
import { NgForm } from '@angular/forms';
import { MedicamentoService } from 'src/app/servicios/medicamento/medicamento.service';

@Component({
  selector: 'app-dialog-medicamento',
  templateUrl: './dialog-medicamento.component.html',
  styleUrls: ['./dialog-medicamento.component.css']
})
export class DialogMedicamentoComponent implements OnInit {

  accion: string;

  constructor(public dialogRef: MatDialogRef<DialogMedicamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public medicamento: Medicamento, private medicamentoService: MedicamentoService ) { 
      this.accion = medicamento.idMedicamento ? "Editar" : "Nuevo";      
    }

  ngOnInit() {
  }

  guardarInformacion(datosForm: NgForm){
    if(this.medicamento.idMedicamento)
      this.editarMedicamento(datosForm.value);      
    else
      this.guardarMedicamento(datosForm.value);
  }

  guardarMedicamento(datos){
    this.medicamentoService.registrarMedicamento(this.crearObjetoMedicamento(datos)).subscribe(
      medicamento => { this.dialogRef.close({"mensaje":"guardado", "medicamento": medicamento}); }, 
      error =>{ this.dialogRef.close({"mensaje":error}); }
    );
  }

  editarMedicamento(datos){
    this.medicamentoService.editarMedicamento(this.crearObjetoMedicamento(datos)).subscribe(
      respuesta => { this.dialogRef.close({"mensaje":"guardado", "medicamento": this.crearObjetoMedicamento(datos)}); },
      error => { this.dialogRef.close({"mensaje": error}); }
    );
  }

  crearObjetoMedicamento(data:any): Medicamento{
    return new Medicamento((this.medicamento.idMedicamento ? this.medicamento.idMedicamento : 0 ),
    data.cantidad, data.compuesto, data.nombre, data.presentacion);
  }

}
