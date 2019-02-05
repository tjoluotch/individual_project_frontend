import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  model = new Student();
  jwTokenPure;
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('signK');
  }

  loginStudent(): void {
    this.submitted = true;

    this.studentService.loginStudent(this.model)
      .subscribe(data => {
        if (data.status === 200) {
          this.jwTokenPure = data.body.token;
        console.log('Successful Login Route ' + this.jwTokenPure);
         window.localStorage.setItem('token', this.jwTokenPure);
         this.router.navigate(['phone-code'])
           .catch(err => {
             alert('navigation issue ' + err);
           });
        } else {
          alert('You entered wrong credentials, please try again!');
        }
      },
        err => {
        console.log('Error on Login route ' + err);
        });
  }

  // TODO: Remove this when done
  get diagnostic() { return JSON.stringify(this.model); }

}
