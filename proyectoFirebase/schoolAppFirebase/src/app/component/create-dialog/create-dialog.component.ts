import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {
  form:FormGroup = new FormGroup({});

  constructor(private fb:FormBuilder) {
    this.form=fb.group({
      firstName:[''],
      lastName:['']
    });
   }

  ngOnInit(): void {
  }

  save(){
    
  }
}
