import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';

import {HabitacionService} from './services/habitacion.service';

import {RouterModule, Routes} from '@angular/router';
import { HabitacionesClienteComponent } from './pages/habitaciones-cliente/habitaciones-cliente.component';
import { DetalleHabitacionComponent } from './pages/habitaciones/detalle-habitacion/detalle-habitacion.component';
import { DetalleReservaComponent } from './pages/habitaciones/detalle-reserva/detalle-reserva.component';
import {ReservasAdminComponent} from './pages/reservas-admin/reservas-admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const routes: Routes =[
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: 'habitaciones', component : HabitacionesComponent},
  {path: 'cliente/habitaciones', component : HabitacionesClienteComponent},
  {path: 'detalles', component: DetalleHabitacionComponent},
  {path: 'admin/reserva', component:ReservasAdminComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    HabitacionesComponent,
    HabitacionesClienteComponent,
    DetalleHabitacionComponent,
    DetalleReservaComponent,
    ReservasAdminComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HabitacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
