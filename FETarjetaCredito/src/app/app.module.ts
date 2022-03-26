import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import { AgregarTarjetaComponent } from './components/agregar-tarjeta/agregar-tarjeta.component';
import { ListarTarjetaComponent } from './components/listar-tarjeta/listar-tarjeta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TarjetaCreditoComponent,
    AgregarTarjetaComponent,
    ListarTarjetaComponent
  ],
  imports: [
    BrowserModule,
    // importamos el Módulo que nos permite trabajar con Formularios Reactivos
    ReactiveFormsModule, 
    // importamos los Módulos de Toastr que nos permite usar mensajes "copados"
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // importamos el Módulo que nos permite realizar peticiones Http
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
