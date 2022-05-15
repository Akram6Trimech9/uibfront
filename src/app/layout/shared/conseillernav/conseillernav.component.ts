import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersauthService } from 'src/app/services/usersauth.service';

@Component({
  selector: 'app-conseillernav',
  templateUrl: './conseillernav.component.html',
  styleUrls: ['./conseillernav.component.css']
})
export class ConseillernavComponent implements OnInit {
  constructor(private userauth:UsersauthService,private router:Router) { }
  Name=''
  image=''
  notifications : [] = [];



  ngOnInit(): void {
    this.Name=this.userauth.getusername()
    this.userauth.getuserByid(this.userauth.getuserid()).subscribe(res=>{
     this.image=res.image
    })




  }



  logout(){
    this.userauth.logOut()
     this.router.navigate(["/conseillerlogin"])
  }
  
}
