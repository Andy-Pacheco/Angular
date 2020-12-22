import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { AdminLoginComponent } from './componentes/admin-login/admin-login.component';
import { UserComponent } from './componentes/user/user.component';
import { PersonasService } from './servicios/personas.service';
import { PeliculasService } from './servicios/peliculas.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PeliculasComponent,
    AdminLoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    PersonasService,
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
