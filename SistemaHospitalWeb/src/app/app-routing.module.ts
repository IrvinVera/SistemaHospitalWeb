import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecpcionistaComponent } from './recpcionista/recpcionista.component';

const routes: Routes = [
  { path: 'recepcionista', component: RecpcionistaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
