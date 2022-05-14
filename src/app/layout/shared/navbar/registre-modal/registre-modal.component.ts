 import { HttpErrorResponse } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { client } from 'src/app/Models/client';
import { UsersauthService } from 'src/app/services/usersauth.service';
import { LoginmodalComponent } from '../loginmodal/loginmodal.component';

@Component({
  selector: 'app-registre-modal',
  templateUrl: './registre-modal.component.html',
  styleUrls: ['./registre-modal.component.css']
})
export class RegistreModalComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);  
  password:any ;
  
  all:any
  fileselected:any
  onFileSelected(event:any) {
    const file:File = event.target.files[0];
    this.fileselected=file
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
  
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<RegistreModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: client,
    private clientService:UsersauthService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
//  login(){
//   const dialogRef = this.dialog.open(LoginmodalComponent, {
//     width: '600px',
//      data: {email: this.email, password: this.password},
//    });

//   dialogRef.afterClosed().subscribe(result => {
//    });
//    
//  }
 variable=true;
 ErrorMessage=""
 role='client'
 nom : any ; 
 add(f:NgForm){ 
   console.log(f.value,this.email.value)
   this.nom=f.value.nom
 var formdata:any=new FormData();
 formdata.append("nom",f.value.nom)
 formdata.append("prenom",f.value.prenom)
 formdata.append("mdp",f.value.mdp)
 formdata.append("genre",f.value.gendre)
 formdata.append("numtel",f.value.numtel)
 formdata.append("cin",f.value.cin)
 formdata.append("email",this.email.value)
 formdata.append("role",this.role)
 formdata.append("image",this.fileselected)
 this.clientService.SignupUser(formdata).subscribe((data)=>{
   const  clientlogin:any={
    'email':this.email.value,
     'mdp':f.value.mdp
   }
   this.clientService.Login(clientlogin).subscribe((data)=>{
     this.clientService.issavetoken(data.token,data.role,data.nom)
     this.variable=false
     window.location.reload()
     this.dialogRef.close();
   })
  },(err:HttpErrorResponse)=>{
  this.ErrorMessage=err.error
  console.log(this.ErrorMessage)
 })
}

}
