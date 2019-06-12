import { Component, OnInit } from '@angular/core';
import { Consultorio } from 'src/app/modelos/Consultorio';
import { NgForm } from '@angular/forms';
import { ConsultorioService } from 'src/app/servicios/consultorio/consultorio.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-consultorio',
  templateUrl: './dialog-consultorio.component.html',
  styleUrls: ['./dialog-consultorio.component.css']
})
export class DialogConsultorioComponent implements OnInit {

  consultorio: Consultorio;

  constructor(private consultorioService: ConsultorioService, public dialogRef: MatDialogRef<DialogConsultorioComponent>) { }

  ngOnInit() {    
    this.consultorio = new Consultorio(0, "","Disponible", null, null);
  }

  guardarConsultorio(datosForm: NgForm){
    this.consultorio.numeroConsultorio = datosForm.value.numeroConsultorio;
    this.consultorioService.registrarConsultorio(this.consultorio).subscribe(
      consultorio => {
          this.dialogRef.close({"mensaje":"guardado", "consultorio": consultorio});
      },
      error => this.dialogRef.close({"mensaje":"error"})
    );
  }

}
