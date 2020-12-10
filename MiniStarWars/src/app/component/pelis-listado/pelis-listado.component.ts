import { Component, OnInit } from '@angular/core';
import { Pelis } from 'src/app/pelis.interface';
import { PelisService } from 'src/app/services/pelis.service';

@Component({
  selector: 'app-pelis-listado',
  templateUrl: './pelis-listado.component.html',
  styleUrls: ['./pelis-listado.component.scss']
})
export class PelisListadoComponent implements OnInit {

  listadoPeliculas:Pelis[];
  columnsToDisplay=['title','episode_id','director','producer','release_date','created'];
  constructor(private pelisService:PelisService) { }

  ngOnInit(): void {
    this.loadPelis();
  }

  loadPelis(){
    this.pelisService.getPelis().subscribe(resp => {
      this.listadoPeliculas=resp.results;
    });
  }
}
