import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './elementos/main/app.component';
import { LibrosComponent } from './elementos/libros/libros.component';
import { MenuComponent } from './elementos/menu/menu.component';
import { LibreriaComponent } from './elementos/libreria/libreria.component';
import { LibrosService } from './service/libros.service';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    MenuComponent,
    LibreriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
