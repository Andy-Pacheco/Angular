import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './componentesApp/events/events.component';
import { ContactComponent } from './componentesApp/contact/contact.component';
import { LoginComponent2 } from './auth/login/login.component';
import { AboutComponent } from './componentesApp/about/about.component';
import { HomeComponent } from './componentesApp/home/home.component';
import { ReguladoraComponent } from './componentesApp/reguladora/reguladora.component';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes = [
  {path:'login', component:LoginComponent2},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'events', component:EventsComponent},
  {path:'', component:HomeComponent},
  {path: 'reguladora', component:ReguladoraComponent},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
