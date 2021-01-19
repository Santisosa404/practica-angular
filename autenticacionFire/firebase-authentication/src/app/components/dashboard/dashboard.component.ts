import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  usuarioActual = localStorage.getItem('userId');
  constructor() { }

  ngOnInit(): void {
    console.log(this.usuarioActual);

  }
// guardas uid result.user.iud
}
