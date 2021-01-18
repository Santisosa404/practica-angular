import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/shared/services/authservice.service';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.scss']
})
export class RecuperarClaveComponent implements OnInit {

  constructor(public authService: AuthserviceService) { }

  ngOnInit(): void {
  }

}
