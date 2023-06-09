import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http: HttpClient) { }

  obtenerTickets(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    }
    return this._http.get("http://localhost:3000/api/ticket/tickets", httpOptions);
  }

  obtenerTicketsPorCategoriaEspectador(categoria: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    }
    return this._http.get("http://localhost:3000/api/ticket/tickets/"+categoria, httpOptions);
  }


  crearTicket(ticket: any): Observable<any> {
    const fechaActual = new Date().toLocaleDateString();
    const data = {
      'fechaCompra': fechaActual,
      'espectador': ticket.espectador,
      'categoriaEspectador': ticket.categoriaEspectador,
      'precio': ticket.precio
    }
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    }
    return this._http.post("http://localhost:3000/api/ticket", data, httpOptions);
  }

  eliminarTicket(idTicket: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    }
    return this._http.delete("http://localhost:3000/api/ticket/"+idTicket, httpOptions);
  }

  modificarTicket(ticketModificado: any): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    }
    return this._http.put("http://localhost:3000/api/ticket/"+ticketModificado._id, ticketModificado, httpOptions);
  }
  obtenerTicket(idTicket: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    }
    return this._http.get("http://localhost:3000/api/ticket/"+idTicket, httpOptions);
  }


}
