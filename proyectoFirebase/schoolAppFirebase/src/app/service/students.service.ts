import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private fireStore: AngularFirestore) { }

  getStudents(){
    return this.fireStore.collection('Students').snapshotChanges();
  }
}
