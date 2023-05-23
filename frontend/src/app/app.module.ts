import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormRegistrarIncidenteComponent } from './components/form-registrar-incidente/form-registrar-incidente.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FormRegistrarIncidenteComponent,
    DashboardComponent,
    MantenimientoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
