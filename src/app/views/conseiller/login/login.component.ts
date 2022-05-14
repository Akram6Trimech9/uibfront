import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersauthService } from 'src/app/services/usersauth.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private adminService:UsersauthService,private router:Router) { }

  ngOnInit(): void {
  }
  add(f:NgForm){
  const  conseillerLogin:any={
    'email':f.value.email,
     'mdp':f.value.mdp
   }
   this.adminService.Login(conseillerLogin).subscribe((data)=>{
     this.adminService.issavetoken(data.token,data.role,data.nom)
     this.router.navigate(['conseiller/calendar'])
     })
    }

}
