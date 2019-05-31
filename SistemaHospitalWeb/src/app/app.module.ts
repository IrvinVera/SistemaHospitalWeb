import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecpcionistaComponent } from './recpcionista/recpcionista.component';
import { MaterialModule } from './material';
import { ListaPacientesComponent } from './recpcionista/lista-pacientes/lista-pacientes.component';
import { DialogNuevaConsultaComponent } from './recpcionista/dialog-nueva-consulta/dialog-nueva-consulta.component';
import { DialogCancelarConsultaComponent } from './recpcionista/dialog-cancelar-consulta/dialog-cancelar-consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    RecpcionistaComponent,
    ListaPacientesComponent,
    DialogNuevaConsultaComponent,
    DialogCancelarConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    DialogNuevaConsultaComponent,
    DialogCancelarConsultaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
