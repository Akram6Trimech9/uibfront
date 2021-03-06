import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {
  constructor(private http:HttpClient) { }
  url="http://localhost:3000/agence";

  get():Observable<any>{
   return this.http.get<any>(`${this.url}/`)
  }
  addagence(agence:any):Observable<any>{
    return this.http.post<any>(`${this.url}/`,agence)
  }

  updateagence(agence:any,id:String):Observable<any>{
    return this.http.patch<any>(`${this.url}/${id}`,agence)
  }
  deleteAgence(id:String){
    return this.http.delete<any>(`${this.url}/${id}`)
  }

deleteConseiller(id:String,idconseiller:String):Observable<any>
{
  return this.http.delete<any>(`${this.url}/${id}/${idconseiller}`);
}

  getagenceByid(id:any):Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`)
  }

  addconseillet(idag :any ,idcons:any,conseiller:any):Observable<any>{
    return this.http.post<any>(`${this.url}/conseiller/${idag}/${idcons}`,conseiller)
  }

}
