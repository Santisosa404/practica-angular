import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Articulo } from 'src/models/articulo';

@Component({
  selector: 'app-lista-articulos-component',
  templateUrl: './lista-articulos-component.component.html',
  styleUrls: ['./lista-articulos-component.component.scss']
})
export class ListaArticulosComponentComponent implements OnInit {
  listaArticulos: Articulo[] = [];
  total: number;
  fecha: Date = new Date();


  constructor() { }
  ngOnInit(): void {
    this.total = 0;
    this.listaArticulos.push(new Articulo(1, "Camiseta Chula", "M", 1, 13, undefined));
    this.listaArticulos.push(new Articulo(2, "Camiseta Chula Manga Corta", "XS", 2, 15, undefined));
    this.listaArticulos.push(new Articulo(3, "Pantalon Vaquero", "S", 1, 45, 40));
    this.listaArticulos.push(new Articulo(4, "Chanclas Amarillas", "41", 1, 8, 2));
    this.listaArticulos.push(new Articulo(5, "Sandalias Autenticas", "37", 4, 34, undefined));
    this.listaArticulos.forEach(articulo => {
      if (articulo.precioRebajado != undefined) {
        this.total += articulo.cantidad * articulo.precioRebajado;
      } else {
        this.total += articulo.cantidad * articulo.precioOriginal;
      }
    });
  }
  buscarPorId(id: number): any {
    this.listaArticulos.forEach(articulo => {
      if (articulo.id == id) {
        return articulo;
      } else {
        return null;
      }
    });
  }
  eliminar(idEliminar:any){
    this.listaArticulos.splice(this.buscarPorId(idEliminar.id),1);
    this.total=0;
    this.listaArticulos.forEach(articulo => {
      if (articulo.precioRebajado != undefined) {
        this.total += articulo.cantidad * articulo.precioRebajado;
      } else {
        this.total += articulo.cantidad * articulo.precioOriginal;
      }
    });
  }

  cambioArticulo(totalCambiado: any) {
    this.total = 0;
    this.listaArticulos.forEach(articulo => {
      if (articulo.id == totalCambiado.id) {

        if (articulo.precioRebajado != undefined) {
          this.total += articulo.cantidad * articulo.precioRebajado;
        } else {
          this.total += articulo.cantidad * articulo.precioOriginal;
        }
      } else {
        if (articulo.precioRebajado != undefined) {
          this.total += articulo.cantidad * articulo.precioRebajado;
        } else {
          this.total += articulo.cantidad * articulo.precioOriginal;
        }
      }
    });

  }
}

