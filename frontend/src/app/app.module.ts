import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProductoFormularioComponent } from './components/producto/producto-formulario/producto-formulario.component';
import { ProductoListadoComponent } from './components/producto/producto-listado/producto-listado.component';
import { TransaccionFormularioComponent } from './components/transaccion/transaccion-formulario/transaccion-formulario.component';
import { TransaccionListadoComponent } from './components/transaccion/transaccion-listado/transaccion-listado.component';
import { TicketListadoComponent } from './components/ticket/ticket-listado/ticket-listado.component';
import { TicketFormularioComponent } from './components/ticket/ticket-formulario/ticket-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductoFormularioComponent,
    ProductoListadoComponent,
    TransaccionFormularioComponent,
    TransaccionListadoComponent,
    TicketListadoComponent,
    TicketFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
