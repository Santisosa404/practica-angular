import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-component',
  templateUrl: './banner-component.component.html',
  styleUrls: ['./banner-component.component.scss']
})
export class BannerComponentComponent implements OnInit {

  sexo:string;
  constructor() { }

  ngOnInit(): void {
    this.sexo='M';
    this.comprobarSexo();
  }
  comprobarSexo(){
    if(this.sexo =='M'){
      return true;
    }else if(this.sexo=='H'){
      return false;
    }
  }
  cambiarSexo(sexo){
    this.sexo=sexo;
  }

}
