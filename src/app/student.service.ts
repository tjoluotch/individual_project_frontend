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
  private postStudentUrl = '/api/signup';

// post request for student signup
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.postStudentUrl, student, this.httpOptions);
  }
}
