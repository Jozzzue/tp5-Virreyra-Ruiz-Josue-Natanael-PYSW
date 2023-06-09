import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-listado',
  templateUrl: './producto-listado.component.html',
  styleUrls: ['./producto-listado.component.css']
})
export class ProductoListadoComponent implements OnInit {

  productos: Array<any> = [];
  productosDestacados: Array<any> = [];
  hayProductos:boolean = false;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductosDestacados();
  }

  obtenerProductos() {
    this.productoService.obtenerProductos().subscribe(
      result => {
        this.productos = result;
        this.hayProductos=true;
      },
      error => {
        console.log("error" + error);
      }
    )
  }
  
  obtenerProductosDestacados() {
    this.productoService.obtenerProductosDestacados().subscribe(
      result => {
        this.productos = result;
        this.hayProductos=true;
      },
      error => {
        console.log("error" + error);
      }
    )
  }

  obtenerGrupoDeItems() {
    const salto = 3;
    const itemsConSalto: any[] = [];

    for (let i = 0; i < this.productos.length; i += salto) {
      const grupo = this.productos.slice(i, i + salto);
      itemsConSalto.push(grupo);
    }

    return itemsConSalto;
  }

}
