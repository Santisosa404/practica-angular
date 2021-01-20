import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  idUsuario = localStorage.getItem('userId');
  password;

  constructor(public afs : AngularFirestore) { }

  ngOnInit(): void {
    console.log(this.idUsuario);

  }


  updatePassword(){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`usuario/${this.idUsuario}`);
  }
// guardas uid result.user.iud
}
