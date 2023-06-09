import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaccion-listado',
  templateUrl: './transaccion-listado.component.html',
  styleUrls: ['./transaccion-listado.component.css']
})
export class TransaccionListadoComponent implements OnInit {

  monedaOrigen !: string;
  monedaDestino !: string;
  email !: string;
  transacciones: Array<any> = [];
  transaccionesPorDivisas: Array<any> = [];
  transaccionesPorCliente: Array<any> = [];

  mostrarFormFiltrado1:boolean = false;
  mostrarFormFiltrado2:boolean = false;
  mostrarFiltrado:boolean = false;

  mostrarTransacciones:boolean = true;
  mostrarTransaccionesPorDivisas:boolean = false;
  mostrarTransaccionesPorCliente:boolean = false;

  data = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York', country: 'USA', profession: 'Engineer', salary: 5000 },
    { id: 2, name: 'Jane Smith', age: 30, city: 'London', country: 'UK', profession: 'Teacher', salary: 4000 },
    { id: 3, name: 'Bob Johnson', age: 40, city: 'Paris', country: 'France', profession: 'Artist', salary: 3000 },
    { id: 4, name: 'Alice Williams', age: 35, city: 'Berlin', country: 'Germany', profession: 'Writer', salary: 4500 }
  ];

  columns = [
    { prop: '_id', name: 'ID' },
    { prop: 'monedaOrigen', name: 'Moneda Origen' },
    { prop: 'monedaDestino', name: 'Moneda Destino' },
    { prop: 'cantidadOrigen', name: 'Cantidad Origen' },
    { prop: 'cantidadDestino', name: 'Cantidad Destino' },
    { prop: 'tasaConversion', name: 'Tasa de Coversion' },
    { prop: 'emailCliente', name: 'Correo' }
  ];

  constructor(private transaccionService: TransaccionService) { }

  ngOnInit(): void {
    this.obtenerTransacciones();
  }

  obtenerTransacciones() {
    this.transaccionService.obtenerTransacciones().subscribe(
      result => {
        this.transacciones = result;
        this.mostrarTransaccionesPorDivisas = false;
        this.mostrarTransaccionesPorCliente = false;
        this.mostrarTransacciones = true;
        console.log("result: "+ result);
      },
      error => {

      }
    )
  }

  filtrarTransaccionesPorDivisas() {
    this.transaccionService.obtenerTransaccionesPorDivisas(this.monedaOrigen, this.monedaDestino).subscribe(
      result => {
        this.transaccionesPorDivisas = result;
        this.mostrarTransaccionesPorDivisas = true;
        this.mostrarTransaccionesPorCliente = false;
        this.mostrarTransacciones = false;
        console.log("result: "+ result);
      },
      error => {

      }
    )
  }

  filtrarTransaccionesPorCliente() {
    this.transaccionService.obtenerTransaccionesPorCliente(this.email).subscribe(
      result => {
        this.transaccionesPorCliente = result;
        this.mostrarTransaccionesPorDivisas = false;
        this.mostrarTransaccionesPorCliente = true;
        this.mostrarTransacciones = false;
        console.log("result: "+ result);
      },
      error => {

      }
    )
  }
}
