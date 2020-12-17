import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminImagenLibroComponent } from './elementos/admin-imagen-libro/admin-imagen-libro.component';
import { ImagenComponent } from './elementos/imagen/imagen.component';
import { LibreriaComponent } from './elementos/libreria/libreria.component';
import { LibrosComponent } from './elementos/libros/libros.component';
import { UsuarioComponent } from './elementos/usuario/usuario.component';

const routes: Routes = [
  {path: 'libreria', component:LibreriaComponent},
  {path: 'CRUDlibreria', component: LibrosComponent},
  {path: 'accesoUsuario', component: UsuarioComponent},
  {path: 'imagen', component: ImagenComponent},
  {path: 'libro-imagen', component: AdminImagenLibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
