import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
 import { Observable } from 'rxjs';
import { UsersauthService } from '../services/usersauth.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: UsersauthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.Token}`
      }
    });
    return next.handle(request);
  }
}