import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule,MatTableModule,MatInputModule,MatPaginatorModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { HabitacionesClienteComponent } from './pages/habitaciones-cliente/habitaciones-cliente.component';
import { DetalleHabitacionComponent } from './pages/habitaciones/detalle-habitacion/detalle-habitacion.component';
import { DetalleReservaComponent } from './pages/habitaciones/detalle-reserva/detalle-reserva.component';
import {ReservasAdminComponent} from './pages/reservas-admin/reservas-admin.component';

import {HabitacionService} from './services/habitacion.service';



import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TableFilteringComponent } from './table-filtering/table-filtering.component';



const routes: Routes =[
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: 'habitaciones', component : HabitacionesComponent},
  {path: 'cliente/habitaciones', component : HabitacionesClienteComponent},
  {path: 'detalles', component: DetalleHabitacionComponent},
  {path: 'admin/reserva', component:ReservasAdminComponent},
  {path: 'admin/reserva/:id',component:ReservasAdminComponent},
  {path: 'reservas/page/:page', component: HabitacionesComponent}
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
    ReservasAdminComponent,
    PaginatorComponent,
    TableFilteringComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HabitacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
