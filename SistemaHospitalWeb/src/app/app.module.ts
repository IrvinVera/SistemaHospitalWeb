import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { HttpClientModule }    from '@angular/common/http';

//Servicios
import { PersonaService } from './persona.service';
import { MedicamentoService } from './servicios/medicamento/medicamento.service'

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
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { DialogMedicamentoComponent } from './coordinador/medicamentos/dialog-medicamento/dialog-medicamento.component';
import { DialogEliminarPersonaComponent } from './coordinador/usuarios/dialog-eliminar-persona/dialog-eliminar-persona.component';
import { DialogEliminarMedicamentoComponent } from './coordinador/medicamentos/dialog-eliminar-medicamento/dialog-eliminar-medicamento.component';

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
    InicioSesionComponent,  
    DialogMedicamentoComponent,
    DialogEliminarPersonaComponent,
    DialogEliminarMedicamentoComponent
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
    MatNativeDateModule,
    HttpClientModule
  ],
  entryComponents:[
    DialogNuevaConsultaComponent,
    DialogCancelarConsultaComponent,
    UsuariosComponent,
    MedicamentosComponent,
    ConsultoriosComponent,
    DialogUsuarioComponent,  
    DialogMedicamentoComponent, 
    DialogEliminarPersonaComponent,
    DialogEliminarMedicamentoComponent 
  ],
  providers: [PersonaService, MedicamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
