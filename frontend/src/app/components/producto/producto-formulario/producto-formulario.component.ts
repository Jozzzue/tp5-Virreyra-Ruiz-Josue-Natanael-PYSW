import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-formulario',
  templateUrl: './producto-formulario.component.html',
  styleUrls: ['./producto-formulario.component.css']
})
export class ProductoFormularioComponent implements OnInit {

  productoNuevo: Producto;
  alerta:string = "";
  
  constructor(private productoService:ProductoService) { 
    this.productoNuevo = new Producto();
    this.productoNuevo.destacado = true;
  }

  ngOnInit(): void {
  }

  agregarProducto(){
    this.productoService.crearProducto(this.productoNuevo).subscribe(
      result => {
        this.alerta = result.msg;
      },
      error => {
        console.log("error" + error);
      }
    )
  }
}
