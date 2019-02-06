import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';
import {Student} from '../student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  student: Student;
  constructor(private __studentService: StudentService, private __router: Router) { }

  ngOnInit() {

  }

  getStudent(): void {
  // TODO: i want to get a student object from the db
    // TODO: by finding the student through decoding the JWT and sending them back as a response
  }
}
