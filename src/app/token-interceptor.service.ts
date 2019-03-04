import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  // Anytime a HTTP request gets sent, encode it with a JWT bearer token
  intercept(req, next) {
    const authService = this.injector.get(StudentService);
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`,
        signK: `${authService.getSignK()}`,
        getChat: `${authService.getChatID()}`
      }
    });

    return next.handle(tokenizedReq);
  }
}
