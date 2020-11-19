import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Articulo } from 'src/models/articulo';

@Component({
  selector: 'app-articulos-component',
  templateUrl: './articulos-component.component.html',
  styleUrls: ['./articulos-component.component.scss']
})
export class ArticulosComponentComponent implements OnInit {

  @Input() articulo: Articulo;
  @Input() i: number;
  @Output() totalCambiado = new EventEmitter();
  @Output() idEliminar= new EventEmitter();
  totalUnArticulo: number;

  constructor() { }

  ngOnInit(): void {

    if (this.articulo.precioRebajado != undefined) {
      this.totalUnArticulo += this.articulo.cantidad * this.articulo.precioRebajado;
    } else {
      this.totalUnArticulo += this.articulo.cantidad * this.articulo.precioOriginal;
    }
  }

  cambio(changes: any): void {
    this.totalUnArticulo = 0;
    if (this.articulo.precioRebajado != undefined) {
      this.totalUnArticulo += this.articulo.cantidad * this.articulo.precioRebajado;
    } else {
      this.totalUnArticulo += this.articulo.cantidad * this.articulo.precioOriginal;
    }
    this.totalCambiado.emit({ total: this.totalUnArticulo, id: this.articulo.id });
  }
  decirEliminar(idEliminado){
    this.idEliminar.emit({id:this.articulo.id});
  }




}
