import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './zonasApp/main/app.component';
import { MenuComponent } from './zonasApp/menu/menu.component';
import { FooterComponent } from './zonasApp/footer/footer.component';
import { EventosComponent } from './zonasApp/eventos/eventos.component';
import { GaleriaComponent } from './zonasApp/galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    EventosComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
