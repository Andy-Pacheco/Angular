import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibreriaComponent } from './elementos/libreria/libreria.component';
import { LibrosComponent } from './elementos/libros/libros.component';

const routes: Routes = [
  {path: 'libreria', component:LibreriaComponent},
  {path: 'CRUDlibreria', component: LibrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
