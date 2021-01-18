import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/shared/services/authservice.service';

@Component({
  selector: 'app-verificar-email',
  templateUrl: './verificar-email.component.html',
  styleUrls: ['./verificar-email.component.scss']
})
export class VerificarEmailComponent implements OnInit {

  constructor(public authService : AuthserviceService) { }

  ngOnInit(): void {
  }

}
