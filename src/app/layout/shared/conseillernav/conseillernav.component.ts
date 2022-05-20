import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { SocketIoService } from 'src/app/services/socket-io.service';
import { UsersauthService } from 'src/app/services/usersauth.service';

@Component({
  selector: 'app-conseillernav',
  templateUrl: './conseillernav.component.html',
  styleUrls: ['./conseillernav.component.css']
})
export class ConseillernavComponent implements OnInit {
  constructor(private userauth:UsersauthService,private router:Router,private notificationService : NotificationService,private socket : SocketIoService) { }
  Name=''
  image=''
  notifications : any [] = [];
  notifnum : String = "0" ;



  ngOnInit(): void {
    
    this.Name=this.userauth.getusername()
    this.userauth.getuserByid(this.userauth.getuserid()).subscribe(res=>{
     this.image=res.image

    })
    
    this.socket.getNotifications("rdv-created-client").subscribe((res:any)=>{
        this.notificationService.getNotifications(this.userauth.getuserid()).subscribe(_notifications => {
      this.notifications=_notifications ;
      this.notifnum=_notifications.length.toString();
       })
    },(err)=>{
       console.log(err);})


       this.socket.getNotifications("rdv-updated-client").subscribe((res:any)=>{
        this.notificationService.getNotifications(this.userauth.getuserid()).subscribe(_notifications => {
      this.notifications=_notifications ;
      this.notifnum=_notifications.length.toString();
       })
    },(err)=>{
       console.log(err);})

       this.socket.getNotifications("rdv-deleted-client").subscribe((res:any)=>{
        this.notificationService.getNotifications(this.userauth.getuserid()).subscribe(_notifications => {
      this.notifications=_notifications ;
      this.notifnum=_notifications.length.toString();
       })
    },(err)=>{
       console.log(err);})




    this.notificationService.getNotifications(this.userauth.getuserid()).subscribe((res: any[])=>{
      this.notifications=res;
      this.notifnum=res.length.toString()
    })

  }


  logout(){
    this.userauth.logOut()
     this.router.navigate(["/conseillerlogin"])
  }
  
}
