import { Component, OnInit } from '@angular/core';
import { Paciente } from "src/app/modelos/Paciente";
import { ListaEsperaNucleo } from 'src/app/nucleo/listaEspera.nucleo';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogCancelarConsultaComponent } from '../dialog-cancelar-consulta/dialog-cancelar-consulta.component'

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  listaEspera: ListaEsperaNucleo;
  pacientesEspera: Array<Paciente>;

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {
    this.listaEspera = new ListaEsperaNucleo();
    this.pacientesEspera = this.listaEspera.mostrar();
   }

  ngOnInit() {
  }

  esHombre(genero:string){
    return genero === "M" ? true : false;
  }

  cancelarConsulta(paciente){
    let indice = this.pacientesEspera.indexOf(paciente);
    this.pacientesEspera.splice(indice, 1);
    this._snackBar.open("Consulta cancelada", "Cerrar", {
      duration: 2000,
    }); 
  }

  mostrarDialogoCancelarConsulta(pacienteSeleccionado){
    const dialogoCancelarConsulta = this.dialog.open(DialogCancelarConsultaComponent, {   
      data: pacienteSeleccionado
    });

    dialogoCancelarConsulta.afterClosed().subscribe(result => {
      if(result){
        this.cancelarConsulta(pacienteSeleccionado);
      }
    });
  }

  

}
