import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators} from '@angular/forms';

import { client } from 'src/app/Models/client';
import { RegistreModalComponent } from '../registre-modal/registre-modal.component';
import { UsersauthService } from 'src/app/services/usersauth.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
  styleUrls: ['./loginmodal.component.css']
})
export class LoginmodalComponent implements OnInit {

email = new FormControl('', [Validators.required, Validators.email]);  
password= new FormControl('', [Validators.required, Validators.minLength(4)]);  

all:any
getErrorMessage() {
  if (this.email.hasError('required')) {
    return 'You must enter a value';
  }

  return this.email.hasError('email') ? 'Not a valid email' : '';
}
getErrorMessage2() {
  if (this.password.hasError('required')) {
    return 'You must enter a password';
  }
  return this.password.hasError('minLength') ? 'Not a valid password' : '';
}
constructor(
  private authService:UsersauthService,
  public dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: client,
  ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  registre(){
    const dialogRef = this.dialog.open(RegistreModalComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.password = result;
    });
    this.dialogRef.close();

  }
  ErrorMessage:any;
  add(){
    const ClientLogin:any={
      "email":this.email.value,
      "mdp":this.password.value
    }
   this.authService.Login(ClientLogin).subscribe((data)=>{
      this.authService.issavetoken(data.token,data.role,data.nom)
      window.location.reload()
      this.dialogRef.close();
    },(err:HttpErrorResponse)=>{
   this.ErrorMessage=err.error
   console.log(this.ErrorMessage)
  })
  }

}
