import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';
import { ButtonsColorComponent } from './components/buttons-color/buttons-color.component';
import { DinamicImagesComponent } from './components/dinamic-images/dinamic-images.component';
import buclesRouter from './components/bucles/blucles.routes';
import formularyRoutes from './components/formulary/formulary.routes';
import { ComunicacionPatherComponent } from './components/comunicacion-pather/comunicacion-pather.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'contador', component:ContadorComponent },
  { path:'color-change', component:ButtonsColorComponent },
  { path:'dinamic-images', component:DinamicImagesComponent },
  { path:'comunication-father-children', component:ComunicacionPatherComponent },
  { path:'messages', component:MessagesComponent },
  ...buclesRouter,
  ...formularyRoutes,
  { path:'**', component:PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
