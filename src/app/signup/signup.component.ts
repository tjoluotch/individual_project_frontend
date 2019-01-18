import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;
  model = new Student();
  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }


  //
  postStudent(): void {
  this.submitted = true;
  // const jsonStudent = JSON.stringify(this.model);

  this.studentService.addStudent(this.model)
    .subscribe(data => {
      console.log('User is saved ' + data);
    },
      err => {
        console.log('Unfortunate error ' + err);
      });
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
