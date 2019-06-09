import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecpcionistaComponent } from './recpcionista/recpcionista.component';
import { MaterialModule } from './material';
import { ListaPacientesComponent } from './recpcionista/lista-pacientes/lista-pacientes.component';
import { DialogNuevaConsultaComponent } from './recpcionista/dialog-nueva-consulta/dialog-nueva-consulta.component';
import { DialogCancelarConsultaComponent } from './recpcionista/dialog-cancelar-consulta/dialog-cancelar-consulta.component';
import { CoordinadorComponent } from './coordinador/coordinador.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsuariosComponent } from './coordinador/usuarios/usuarios.component';
import { MedicamentosComponent } from './coordinador/medicamentos/medicamentos.component';
import { ConsultoriosComponent } from './coordinador/consultorios/consultorios.component';
import { DialogUsuarioComponent } from './coordinador/usuarios/dialog-usuario/dialog-usuario.component';
import { ListaUsuariosComponent } from './coordinador/usuarios/lista-usuarios/lista-usuarios.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ListaMedicamentosComponent } from './coordinador/medicamentos/lista-medicamentos/lista-medicamentos.component';
import { DialogMedicamentoComponent } from './coordinador/medicamentos/dialog-medicamento/dialog-medicamento.component';

@NgModule({
  declarations: [
    AppComponent,
    RecpcionistaComponent,
    ListaPacientesComponent,
    DialogNuevaConsultaComponent,
    DialogCancelarConsultaComponent,
    CoordinadorComponent,
    UsuariosComponent,
    MedicamentosComponent,
    ConsultoriosComponent,
    DialogUsuarioComponent,
    ListaUsuariosComponent,
    InicioSesionComponent,
    ListaMedicamentosComponent,
    DialogMedicamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatNativeDateModule
  ],
  entryComponents:[
    DialogNuevaConsultaComponent,
    DialogCancelarConsultaComponent,
    UsuariosComponent,
    MedicamentosComponent,
    ConsultoriosComponent,
    DialogUsuarioComponent,  
    DialogMedicamentoComponent,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
