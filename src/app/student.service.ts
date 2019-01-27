import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Student} from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {

  }
  // Headers with the request im sending
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  // url to Golang API: post a student to DB
  private signupStudentUrl = '/api/signup';

  // url to login a student
  private loginStudentUrl = '/api/authenticate';

// post request for student signup
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.signupStudentUrl, student, this.httpOptions);
  }


  loginStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.loginStudentUrl, student, this.httpOptions);
  }

}
