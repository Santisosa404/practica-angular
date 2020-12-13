import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AutoresService } from '../services/autores.service';

@Component({
  selector: 'app-lista-autores',
  templateUrl: './lista-autores.component.html',
  styleUrls: ['./lista-autores.component.css']
})
export class ListaAutoresComponent implements OnInit {

  displayedColumns: String[] = ['id_BNE', 'nombre_de_persona','obras_relacionadas'];
  listadoAutores = new MatTableDataSource();

  constructor(private autoresService: AutoresService) { }

  ngOnInit(): void {
    this.autoresService.getAutores().subscribe(resp => {
      console.log(resp);
      this.listadoAutores.data = resp;
    });

  }

}
