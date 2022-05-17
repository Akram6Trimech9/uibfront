import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { UsersauthService } from 'src/app/services/usersauth.service';

@Component({
  selector: 'app-conseillernav',
  templateUrl: './conseillernav.component.html',
  styleUrls: ['./conseillernav.component.css']
})
export class ConseillernavComponent implements OnInit {
  constructor(private userauth:UsersauthService,private router:Router,private notificationService : NotificationService) { }
  Name=''
  image=''
  notifications : any [] = [];
  notifnum : String = "0" ;



  ngOnInit(): void {
    this.notificationService.getNotifications(this.userauth.getuserid()).subscribe((res: any[])=>{
        this.notifications=res;
        console.log(res);
        this.notifnum=res.length.toString()
      })


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
