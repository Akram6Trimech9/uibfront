import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  url="http://localhost:3000/rdv";
  constructor(private http:HttpClient){ }
   createnewrdv(rdv:any):Observable<any>{
    return this.http.post<any>(`${this.url}/`,rdv)
  }
  getrdvbyclient(id:any):Observable<any>{
    return this.http.get<any>(`${this.url}/conseiller/${id}`)
  }
  getrdvbyconseiller(id:any):Observable<any>{
    return this.http.get<any>(`${this.url}/conseiller/${id}`)
  }
  confirmerRdv(id:any,idclient:any,confirmed:boolean):Observable<any>{
    return this.http.post<any>(`${this.url}/confirm/${id}/${idclient}`,{confirmed});
  }

}

