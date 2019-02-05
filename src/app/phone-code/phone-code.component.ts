import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-phone-code',
  templateUrl: './phone-code.component.html',
  styleUrls: ['./phone-code.component.css']
})
export class PhoneCodeComponent implements OnInit {
  constructor(private studentService: StudentService, private router: Router) { }


  phoneCodeForm = new FormGroup({
    phoneCode: new FormControl(''),
  });

  notSubmitted;
  ngOnInit() {
  }

  // TODO: Send the form data along with the JWT from local Storage
  // Validate token miiddleware on backend

  sendPhoneCode(): void {
    const key = this.phoneCodeForm.get('phoneCode').value;
    this.studentService.sendPhoneCode(this.phoneCodeForm.value)
      .subscribe(data => {
        if (data.status === 200) {
          this.notSubmitted = false;
          console.log('Successful phone code submission');
          window.localStorage.setItem('signK', key);
          this.router.navigate(['dashboard']);
        } else {
          this.notSubmitted = true;
        }
      },
        err => {
        console.log('error on send phone code http post ' + err);
          this.notSubmitted = true;
        });
    this.phoneCodeForm.reset();
  }

}
