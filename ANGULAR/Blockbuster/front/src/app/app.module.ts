import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { AdminLoginComponent } from './componentes/admin-login/admin-login.component';
import { UserComponent } from './componentes/user/user.component';
import { PersonasService } from './servicios/personas.service';
import { PeliculasService } from './servicios/peliculas.service';
import { UsuarioHijoComponent } from './componentes/user/usuario-hijo/usuario-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PeliculasComponent,
    AdminLoginComponent,
    UserComponent,
    UsuarioHijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PersonasService,
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
