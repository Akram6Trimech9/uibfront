import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { users } from '../Models/users';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class UsersauthService {
    helper = new JwtHelperService();

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/user";
  SignupUser(user:any):Observable<users>{
    return this.http.post<users>(`${this.url}/signup`,user)
  }
  Login(user:any):Observable<any>{
  return this.http.post<any>(`${this.url}/login`,user);
  }
  issavetoken(token:any,role:any,nom:any){
    localStorage.setItem('token',token)//samineh token w attinek token 
   localStorage.setItem('role',role)
   localStorage.setItem('username',nom)
  // this.Isloggedin=true; 
  }
  Isloggedin:boolean=false ;
  getusername(){
    let token:any=localStorage.getItem('token')
    let decodeToken=this.helper.decodeToken(token)
    return decodeToken.nom
  }
  getuserid(){
    let token:any=localStorage.getItem('token')
    let decodeToken=this.helper.decodeToken(token)
    return decodeToken.user_id
  }
  logOut(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
  }
  LoggedIn(){
    let token:any=localStorage.getItem('token')
    let decodeToken=this.helper.decodeToken(token)
    let role =decodeToken.role
   if(role!=='admin'){
     return false
   }if(this.helper.isTokenExpired(token)){
     return false 
   }
   return true
  }
  ClientLoggedIn(){
    let token:any=localStorage.getItem('token')
    let decodeToken=this.helper.decodeToken(token)
    let role =decodeToken.role
   if(role!=='client'){
     return false
   }if(this.helper.isTokenExpired(token)){
     return false 
   }
   return true
  }
   
  Token=localStorage.getItem('token')
  
  getuserByid(id:any):Observable<any> {
     return this.http.get<any>(`${this.url}/${id}`)
  }
  
  validateUser(id:any):Observable<any> {
    return this.http.patch<any>(`${this.url}/conseiller/validate/${id}`,{})
 }
}

