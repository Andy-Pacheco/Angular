import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './componentesApp/main/app.component';
import { AboutComponent } from './componentesApp/about/about.component';
import { MenuComponent } from './componentesApp/menu/menu.component';
import { LoginComponent } from './componentesApp/login/login.component';
import { ContactComponent } from './componentesApp/contact/contact.component';
import { FooterComponent } from './componentesApp/footer/footer.component';
import { EventsComponent } from './componentesApp/events/events.component';
import { TabsDirective } from './directivesApp/tabs.directive';
import { HomeComponent } from './componentesApp/home/home.component';
import { ReguladoraComponent } from './componentesApp/reguladora/reguladora.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MenuComponent,
    LoginComponent,
    ContactComponent,
    FooterComponent,
    EventsComponent,
    TabsDirective,
    HomeComponent,
    ReguladoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
