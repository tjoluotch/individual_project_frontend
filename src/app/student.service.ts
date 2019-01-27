import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Student} from './student';
import {JwToken} from './jw-token';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {

  }
  // Headers with the request im sending so that i get back full http
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    observe: 'response' as 'body'
  };

  // url to Golang API: post a student to DB
  private signupStudentUrl = '/api/signup';

  // url to login a student
  private loginStudentUrl = '/api/authenticate';

// post request for student signup
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.signupStudentUrl, student, this.httpOptions);
  }


  loginStudent(student: Student): Observable<HttpResponse<JwToken>> {
    return this.http.post<HttpResponse<JwToken>>(this.loginStudentUrl, student, this.httpOptions);
      //.pipe(
       // catchError
      //);
  }

}
