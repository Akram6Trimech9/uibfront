import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  url : String ="http://localhost:3000/notification";

  constructor(private http : HttpClient) {
  }

  getNotifications(conseiller:String):Observable<any []> {
      return this.http.get<any []>(`${this.url}/${conseiller}`);
    }
  
  
  
  }
