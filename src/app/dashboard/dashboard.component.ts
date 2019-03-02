import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {ActivatedRoute, Router} from '@angular/router';
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
    this.getStudent();
  }

  getStudent(): void {
    this.__studentService.getStudent()
      .subscribe(data => {
        if (data.status === 200) {
          console.log('Student Gotten Successfully');
          // Investigate on using rxjs to map response to class
          this.student = data.body;
        } else {
          console.log('error getting Student');
        }
      });
  }

  goToModules(): void {
    this.__router.navigate(['modules']);
  }

  goToChatSpace(): void {
    this.__router.navigate(['chatspace']);
  }

}
