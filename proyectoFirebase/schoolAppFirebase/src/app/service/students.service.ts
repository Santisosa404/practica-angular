import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Student } from '../models/student.class';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private fireStore: AngularFirestore) { }

  getStudents(){
    return this.fireStore.collection('Students').snapshotChanges();
  }

  createStudent(student:Student){
    return this.fireStore.collection('Students').add(student);
  }

  updateStudent(student:Student){
    delete student.id;
    this.fireStore.doc('student/'+student.id).update(student);
  }

  deleteStudentById(id:string){
    this.fireStore.doc('Students/'+id).delete();
  }
}
