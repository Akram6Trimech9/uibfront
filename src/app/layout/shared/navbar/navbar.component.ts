import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsersauthService } from 'src/app/services/usersauth.service';
import { LoginmodalComponent } from './loginmodal/loginmodal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
username:any
  constructor(public dialog: MatDialog,public clientService:UsersauthService,private router:Router) { }
variable:boolean=false
  ngOnInit(): void {
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
