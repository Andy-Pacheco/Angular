//importacion de las librerias necesarias para las distintas areas de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';

// incluir distntas rutas en mi app
import { AppComponent } from './app.component';
import { FormularioComponent } from './elementosApp/formulario/formulario.component';
import { MenuComponent } from './elementosApp/menu/menu.component';
import { FooterComponent } from './elementosApp/footer/footer.component';
import { NosotrosComponent } from './elementosApp/nosotros/nosotros.component';
import { BindingComponent } from './elementosApp/binding/binding.component';
import { RegistroComponent } from './elementosApp/registro/registro.component';
import { DirectivasComponent } from './elementosApp/directivas/directivas.component';
import { ColorDirective } from './directivaPropia/color.directive';


// rutas
const urls:Routes =[
  {path: 'formulario', component: FormularioComponent},
  {path: 'quienes-somos', component: NosotrosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'directivas', component:DirectivasComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
  
];


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    MenuComponent,
    FooterComponent,
    NosotrosComponent,
    BindingComponent,
    RegistroComponent,
    DirectivasComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(urls)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
