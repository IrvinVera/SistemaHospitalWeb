import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecpcionistaComponent } from './recpcionista/recpcionista.component';
import { CoordinadorComponent } from './coordinador/coordinador.component';

const routes: Routes = [
  { path: 'recepcionista', component: RecpcionistaComponent},
  { path: 'coordinador', component: CoordinadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
