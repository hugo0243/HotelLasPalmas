import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';

import {RouterModule, Routes} from '@angular/router';
import { HabitacionesClienteComponent } from './pages/habitaciones-cliente/habitaciones-cliente.component';


const routes: Routes =[
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: 'habitaciones', component : HabitacionesComponent},
  {path: 'cliente/habitaciones', component : HabitacionesClienteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    HabitacionesComponent,
    HabitacionesClienteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
