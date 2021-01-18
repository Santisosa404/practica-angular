import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student.class';
import { StudentsService } from 'src/app/service/students.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  studentsList:Student[];
  firstNameNew:string;
  lastNameNew:string;
  dataSource = new MatTableDataSource();
  displayedColumns:string[] = ['firstname','lastname','curso','age','id'];
  constructor(private studentsService: StudentsService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.studentsService.getStudents().subscribe(resp =>{
      this.studentsList = resp.map(elem =>{
        return{
          id:elem.payload.doc.id,
          data: elem.payload.doc.data()
        }as Student;
      });
      this.dataSource.data = this.studentsList;
      console.log(this.studentsList);
    });
  }

  openDialog():void{
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '250px',
      data: {firstname: this.firstNameNew, lastName: this.lastNameNew}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }


  createStudent(student:Student){
    this.studentsService.createStudent(student);
  }
  updateStudent(student:Student){
    this.studentsService.updateStudent(student);
  }
  deleteStudentById(id:string){
    this.studentsService.deleteStudentById(id);
  }
}
