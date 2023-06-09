import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-listado',
  templateUrl: './ticket-listado.component.html',
  styleUrls: ['./ticket-listado.component.css']
})
export class TicketListadoComponent implements OnInit {

  tickets: Array<any> = [];
  ticketsPorCategoriaEspectador: Array<any> = [];
  mostrarTickets: boolean = true;
  mostrarTicketsFiltrados1: boolean = false;
  mostrarFormFiltrado1: boolean = false;
  categoriaEspectador !: string;

  constructor(private ticketService: TicketService) {
    this.obtenerTickets();
  }

  ngOnInit() {
  }
  obtenerTickets() {
    this.ticketService.obtenerTickets().subscribe(
      result => {
        this.tickets = result;
        this.mostrarTickets = true;
        this.mostrarTicketsFiltrados1 = false;
      },
      error => {

      }
    )
  }
  obtenerTicketsPorCategoriaEspectador() {
    this.ticketService.obtenerTicketsPorCategoriaEspectador(this.categoriaEspectador).subscribe(
      result => {
        this.ticketsPorCategoriaEspectador = result;
        this.mostrarTickets = false;
        this.mostrarTicketsFiltrados1 = true;
      },
      error => {

      }
    )
  }
  eliminarTicket(idTicket:any) {
    this.ticketService.eliminarTicket(idTicket).subscribe(
      result =>{
        this.obtenerTickets();
      },
      error =>{
        console.log("error: "+error)
      }
    )
  }

  cantidadTicketsLocal() {
    return this.tickets.filter(ticket => ticket.categoriaEspectador === 'local').length;
  }

  cantidadTicketsExtranjero() {
    return this.tickets.filter(ticket => ticket.categoriaEspectador === 'extranjero').length;
  }

  totalVentas() {
    return this.tickets.reduce((total, ticket) => total + (ticket.precio ?? 0), 0);
  }

  totalVentasLocal(): number {
    const ticketsLocal = this.tickets.filter(ticket => ticket.categoriaEspectador === 'local');
    const totalLocal = ticketsLocal.reduce((total, ticket) => total + (ticket.precio ?? 0), 0);
    return totalLocal;
  }

  totalVentasExtranjero(): number {
    const ticketsExtranjero = this.tickets.filter(ticket => ticket.categoriaEspectador === 'extranjero');
    const totalExtranjero = ticketsExtranjero.reduce((total, ticket) => total + ticket.precio, 0);
    return totalExtranjero;
  }

}
