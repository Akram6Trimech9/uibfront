import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  url="http://localhost:3000/feedback";

  constructor(private http : HttpClient) { }


  createFeedback(feedback:any) :Observable<any>{
    console.log(feedback);
    return this.http.post<any>(`${this.url}/`,feedback)
  }

  getFeedback() :Observable<any>{
    return this.http.get<any>(`${this.url}`)
  }
}
