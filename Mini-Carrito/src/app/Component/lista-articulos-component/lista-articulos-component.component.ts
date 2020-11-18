import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Articulo } from 'src/models/articulo';

@Component({
  selector: 'app-lista-articulos-component',
  templateUrl: './lista-articulos-component.component.html',
  styleUrls: ['./lista-articulos-component.component.scss']
})
export class ListaArticulosComponentComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }
}
