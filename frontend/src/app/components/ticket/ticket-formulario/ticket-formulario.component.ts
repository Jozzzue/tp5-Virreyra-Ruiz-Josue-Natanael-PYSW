import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { EspectadorService } from 'src/app/services/espectador.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-formulario',
  templateUrl: './ticket-formulario.component.html',
  styleUrls: ['./ticket-formulario.component.css']
})
export class TicketFormularioComponent implements OnInit {

  ticket: Ticket = new Ticket();
  espectadores: Array<any> = [];
  accion!: string;

  alertaTicket!: string;
  espSelected: boolean = false;
  precioFinal!: number;

  constructor(private ticketService: TicketService, private espectadorService: EspectadorService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarEspectadores();

    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";
        this.ticket = new Ticket();
        this.ticket.categoriaEspectador = 'e';
      } else {
        this.accion = "update";
        this.cargarTicket(params['id']);
      }
    });
  }

  cargarTicket(id: string) {
    this.ticketService.obtenerTicket(id).subscribe(
      result => {
        this.ticket = result;
        if (this.ticket.categoriaEspectador === 'extranjero')
          this.ticket.categoriaEspectador = 'e';
        else if (this.ticket.categoriaEspectador == 'local')
          this.ticket.categoriaEspectador = 'l';
        console.log(this.ticket);
      }
    );
  }

  registrarTicket() {
    this.ticket.precio == this.precioFinal;
    this.ticketService.crearTicket(this.ticket).subscribe(
      result => {
        this.alertaTicket = result.msg;
      },
      error => {
        console.log("error: " + error)
      }
    )
  }

  modificarTicket() {
    if (this.precioFinal) {
      this.ticket.precio == this.precioFinal;
    }

    this.ticketService.modificarTicket(this.ticket).subscribe(
      result => {
        this.alertaTicket = result.msg;
        this.accion = "new";
        this.ticket = new Ticket();
        this.ticket.categoriaEspectador = 'e';
        this.precioFinal = 0;
      },
      error => {
        console.log("error: " + error)
      }
    )
  }

  cargarEspectadores() {
    this.espectadorService.obtenerEspectadores().subscribe(
      result => {
        this.espectadores = result;
      },
      error => {
        alert("Error obteniendo los espectadores!" + error);
      }
    )
  }

  calcularDescuento() {
    if (this.ticket.categoriaEspectador === 'l') {
      this.precioFinal = this.ticket.precio * 0.8;
    } else {
      this.precioFinal = this.ticket.precio;
    }
  }
}
