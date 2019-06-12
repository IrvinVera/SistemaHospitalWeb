import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecpcionistaComponent } from './recpcionista/recpcionista.component';
import { CoordinadorComponent } from './coordinador/coordinador.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { MedicoComponent } from './medico/medico.component'

const routes: Routes = [
  { path: '', component: InicioSesionComponent },
  { path: 'recepcionista', component: RecpcionistaComponent},
  { path: 'coordinador', component: CoordinadorComponent},
  { path: 'medico', component: MedicoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
