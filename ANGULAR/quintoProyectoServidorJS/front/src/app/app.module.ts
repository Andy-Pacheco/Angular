import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './elementos/main/app.component';
import { LibrosComponent } from './elementos/libros/libros.component';
import { MenuComponent } from './elementos/menu/menu.component';
import { LibreriaComponent } from './elementos/libreria/libreria.component';
import { LibrosService } from './service/libros.service';
import { UsuarioComponent } from './elementos/usuario/usuario.component';
import { ImagenComponent } from './elementos/imagen/imagen.component';
import { AdminImagenLibroComponent } from './elementos/admin-imagen-libro/admin-imagen-libro.component';
import { ImagenService } from './service/imagen.service';
import { AdminService } from './service/admin.service';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    MenuComponent,
    LibreriaComponent,
    UsuarioComponent,
    ImagenComponent,
    AdminImagenLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LibrosService, ImagenService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
