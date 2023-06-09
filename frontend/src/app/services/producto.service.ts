import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http: HttpClient) { }

  obtenerProductos(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    }
    return this._http.get("http://localhost:3000/api/producto/productos", httpOptions);
  }

  obtenerProductosDestacados(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    }
    return this._http.get("http://localhost:3000/api/producto/productos/destacados", httpOptions);
  }

  crearProducto(producto: any): Observable<any> {
    const data = {
      'nombre': producto.nombre,
      'descripcion': producto.descripcion,
      'imagen': producto.imagen,
      'precio': producto.precio,
      'stock': producto.stock,
      'destacado': producto.destacado
    }

    let httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    }
    return this._http.post("http://localhost:3000/api/producto/", producto, httpOptions);
  }

}
