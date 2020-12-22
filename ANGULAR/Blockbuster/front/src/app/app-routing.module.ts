import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './componentes/admin-login/admin-login.component';
import { HomeComponent } from './componentes/home/home.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { UserComponent } from './componentes/user/user.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'admin', component:AdminLoginComponent},
  {path: 'peliculas', component:PeliculasComponent},
  {path: 'user', component:UserComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
