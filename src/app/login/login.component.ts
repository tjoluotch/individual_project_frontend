import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  model = new Student();
  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  loginStudent(): void {
    this.submitted = true;

    this.studentService.loginStudent(this.model)
      .subscribe(data => {
        console.log('Login Route test ' + JSON.stringify(data.body));
      },
        err => {
        console.log('Error on Login route ' + err);
        });
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
