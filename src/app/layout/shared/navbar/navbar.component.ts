import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsersauthService } from 'src/app/services/usersauth.service';
import { LoginmodalComponent } from './loginmodal/loginmodal.component';
import { SocketIoService } from 'src/app/services/socket-io.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {

username:any
notifications : any [] =[];
notificationnum : String = "0" ;

  constructor(public dialog: MatDialog,public clientService:UsersauthService,private router:Router,private notification : NotificationService, private socket : SocketIoService) {    
      
  }
  variable:boolean=false
  
  
  ngOnInit(): void {

    this.socket.getNotifications("rdv-notconfirmed-client").subscribe((res:any)=>{
        this.notification.getNotifications(this.clientService.getuserid()).subscribe(_notifications => {
      this.notifications=_notifications ;
      this.notificationnum=_notifications.length.toString();
       })
    },(err)=>{
       console.log(err);})
       this.socket.getNotifications("rdv-confirmed-client").subscribe((res:any)=>{
          this.notification.getNotifications(this.clientService.getuserid()).subscribe(_notifications => {
        this.notifications=_notifications ;
        this.notificationnum=_notifications.length.toString();
         })
      },(err)=>{
         console.log(err);})
  


    if(this.clientService.ClientLoggedIn()){
     this.variable=true
    }
   this.username=this.clientService.getusername()

  
  }
  logout(){
    this.clientService.logOut()
    this.variable=false
    this.router.navigate(["/"])
  }
  email: any ; 
  password: any ;

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginmodalComponent, {
      width: '600px',
      data: {email: this.email},
    });

    dialogRef.afterClosed().subscribe(result => {
     
      });
  }
 

}
