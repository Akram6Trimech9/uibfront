import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  url="http://localhost:3000/calendar";
  constructor(private http:HttpClient) { }
  createCalendar(id:any ,calendar:any) :Observable<any>{
    return this.http.post<any>(`${this.url}/${id}`,calendar)
  }
}
