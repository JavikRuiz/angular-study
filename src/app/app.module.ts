import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ButtonsColorComponent } from './components/buttons-color/buttons-color.component';
import { DinamicImagesComponent } from './components/dinamic-images/dinamic-images.component';
import { FormularyComponent } from './components/formulary/formulary.component';
import { BuclesComponent } from './components/bucles/bucles.component';
import { ForComponent } from './components/bucles/for/for.component';
import { SwitchComponent } from './components/bucles/switch/switch.component';
import { ReactiveComponent } from './components/formulary/reactive/reactive.component';
import { VariablePlantillaComponent } from './components/formulary/variable-plantilla/variable-plantilla.component';
import { FormPlantillaComponent } from './components/formulary/form-plantilla/form-plantilla.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComunicacionPatherComponent } from './components/comunicacion-pather/comunicacion-pather.component';
import { ChildrenComponent } from './components/comunicacion-pather/children/children.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AddMessagesComponent } from './components/messages/add-messages.component';
import { ListMessagesComponent } from './components/messages/list-messages.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { FooterComponent } from './components/partials/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ButtonsColorComponent,
    DinamicImagesComponent,
    FormularyComponent,
    BuclesComponent,
    ForComponent,
    SwitchComponent,
    ReactiveComponent,
    VariablePlantillaComponent,
    FormPlantillaComponent,
    ComunicacionPatherComponent,
    ChildrenComponent,
    MessagesComponent,
    AddMessagesComponent,
    ListMessagesComponent,
    PageNotfoundComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
