import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersauthService } from 'src/app/services/usersauth.service';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css']
})
export class AdminnavComponent implements OnInit {
  Name=''
  image=''

  constructor(private userauth : UsersauthService ,private router:Router) { }

  ngOnInit(): void {
    this.Name=this.userauth.getusername()
    this.userauth.getuserByid(this.userauth.getuserid()).subscribe(res=>{
     this.image=res.image})
  }
  
  logout(){
    this.userauth.logOut()
     this.router.navigate(["/conseillerlogin"])
  }

}
