import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private _http: HttpClient) { }


  getConversion(from: string, to: string, amount: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'aca va tu papi key xd',
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
      }),
      params: new HttpParams()
        .append("from", from)
        .append("to", to)
        .append("amount", amount)
    }
    return this._http.get("https://currency-converter18.p.rapidapi.com/api/v1/convert", httpOptions);
  }


  getConversion2(transaccionRecibida:any): Observable<any> {
    const transaccion = {
      'monedaOrigen': transaccionRecibida.monedaOrigen,
      'cantidadOrigen': transaccionRecibida.cantidadOrigen,
      'monedaDestino': transaccionRecibida.monedaDestino,
      'cantidadDestino': transaccionRecibida.cantidadDestino,
      'emailCliente': transaccionRecibida.emailCliente,
      'tasaConversion': transaccionRecibida.tasaConversion
    };
    let httpOptions = {
      headers: new HttpHeaders({}), params: new HttpParams()
    }
    return this._http.post("http://localhost:3000/api/transaccion/", transaccionRecibida, httpOptions);
  }

  getCurrencyCodes(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'a7876310d9msh949fcc13cab1197p1ae733jsne1c8d6267885',
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
      })
    }
    return this._http.get("https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies", httpOptions);
  }

  obtenerTransacciones(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({}), 
      params: new HttpParams()
    }
    return this._http.get("http://localhost:3000/api/transaccion/transacciones", httpOptions);
  }

  obtenerTransaccionesPorDivisas(from:string, to:string): Observable<any> { 
    console.log("from, to: "+ from+", "+to)
    let httpOptions = {
      headers: new HttpHeaders({}), 
      params: new HttpParams()
      .append("de",from)
      .append("a",to)
    }
    return this._http.get("http://localhost:3000/api/transaccion/transacciones/divisas", httpOptions);
  }
  obtenerTransaccionesPorCliente(email:string): Observable<any> { 
    console.log("email: "+ email)
    let httpOptions = {
      headers: new HttpHeaders({}), 
      params: new HttpParams()
      .append("email",email)
    }
    return this._http.get("http://localhost:3000/api/transaccion/transacciones/cliente", httpOptions);
  }
}

