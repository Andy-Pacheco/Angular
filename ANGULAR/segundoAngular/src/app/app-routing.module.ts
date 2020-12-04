import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosComponent } from './zonasApp/eventos/eventos.component';
import { GaleriaComponent } from './zonasApp/galeria/galeria.component';

const routes: Routes = [
  {path: 'eventos', component:EventosComponent},
  {path: 'galeria', component:GaleriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
