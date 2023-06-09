import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoFormularioComponent } from './components/producto/producto-formulario/producto-formulario.component';
import { ProductoListadoComponent } from './components/producto/producto-listado/producto-listado.component';
import { TransaccionListadoComponent } from './components/transaccion/transaccion-listado/transaccion-listado.component';
import { TransaccionFormularioComponent } from './components/transaccion/transaccion-formulario/transaccion-formulario.component';
import { TicketListadoComponent } from './components/ticket/ticket-listado/ticket-listado.component';
import { TicketFormularioComponent } from './components/ticket/ticket-formulario/ticket-formulario.component';

const routes: Routes = [
  {path:"productoformulario",component: ProductoFormularioComponent},
  {path:"productolistado",component: ProductoListadoComponent},
  {path:"transaccionlistado",component: TransaccionListadoComponent},
  {path:"transaccionformulario",component: TransaccionFormularioComponent},
  {path:"ticketlistado",component: TicketListadoComponent},
  {path:"ticketformulario/:id",component: TicketFormularioComponent},
  { path: '**', pathMatch:'full',redirectTo:'productolistado'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
