import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Medicamento } from 'src/app/modelos/Medicamento';
import { DialogMedicamentoComponent } from './dialog-medicamento/dialog-medicamento.component';
import { DialogEliminarMedicamentoComponent } from './dialog-eliminar-medicamento/dialog-eliminar-medicamento.component'
import { MedicamentoService } from 'src/app/servicios/medicamento/medicamento.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit {

  medicamentos: Medicamento[];
  medicamentoSeleccionado: Medicamento;

  constructor(public dialog: MatDialog, private medicamentoService: MedicamentoService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.mostrarMedicamentos();
  }

  mostrarMedicamentos(){
    this.medicamentoService.obtenerMedicamentos().subscribe(
      medicamentos => this.medicamentos = medicamentos
    );
  }

  mostrarDialogEliminarMedicamento(medicamento: Medicamento){
    this.medicamentoSeleccionado = medicamento;
    var dialogEliminar = this.dialog.open(DialogEliminarMedicamentoComponent, {
      data: medicamento
    });

    dialogEliminar.afterClosed().subscribe(
      resultado => {
        if (resultado)
        this.eliminarMedicamento();
      }
    );
  }

  eliminarMedicamento(){
    this.medicamentoService.eliminarMedicamento(this.medicamentoSeleccionado.idMedicamento).subscribe(
      resultado => {
        var index = this.medicamentos.indexOf(this.medicamentoSeleccionado);
        this.medicamentos.splice(index, 1);
        this.crearMensaje("Medicamento eliminado");
      },
      error => { this.crearMensaje("Error al eliminar medicamento");}
    );
  }

  mostrarDialogoMedicamento(){
    var dialogMedicamento = this.dialog.open(DialogMedicamentoComponent, {   
      width: '40%',
      data: new Medicamento(null, null, null, null, null),
    });

    dialogMedicamento.afterClosed().subscribe(
      respuesta => {
        this.mostrarMensajeGuardar(respuesta);
      }
    );
  }

  mostrarMensajeGuardar(respuesta){
    if (respuesta.mensaje == "guardado"){
      this.medicamentos.push(respuesta.medicamento);
      this.crearMensaje("Medicamento guardado");
    }

    if (respuesta.mensaje == "error"){
      this.crearMensaje("Error al guardar el medicamento");
    }
  }
  
  mostrarDialogoMedicamentoEditar(medicamento: Medicamento){
    this.medicamentoSeleccionado = medicamento;
    var dialogMedicamento = this.dialog.open(DialogMedicamentoComponent, {   
      width: '40%',
      data: medicamento,
    }); 
    
    dialogMedicamento.afterClosed().subscribe(
      respuesta => {
        this.mostrarMensajeEditar(respuesta);
      }
    );
  }

  mostrarMensajeEditar(respuesta){
    if (respuesta.mensaje == "guardado"){
      this.medicamentoSeleccionado.nombre = respuesta.medicamento.nombre;
      this.medicamentoSeleccionado.cantidad = respuesta.medicamento.cantidad;
      this.medicamentoSeleccionado.compuesto = respuesta.medicamento.compuesto;
      this.medicamentoSeleccionado.presentacion = respuesta.medicamento.presentacion;
      this.crearMensaje("Medicamento actualizado");
    }

    if (respuesta.mensaje == "error"){
      this.crearMensaje("Error al actualizar el medicamento");
    }
  }

  crearMensaje(mensaje:string){
    this._snackBar.open(mensaje, "Cerrar", {
      duration: 3000,
    }); 
  }



}
