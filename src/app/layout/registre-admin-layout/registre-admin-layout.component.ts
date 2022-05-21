import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsersauthService } from 'src/app/services/usersauth.service';

@Component({
  selector: 'app-registre-admin-layout',
  templateUrl: './registre-admin-layout.component.html',
  styleUrls: ['./registre-admin-layout.component.css']
})
export class RegistreAdminLayoutComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private adminService:UsersauthService,private router:Router) { }
  agences:any[]=[]
  ngOnInit(): void {
   
  }
  fileselected:any
  onFileSelected(event:any) {
    const file:File = event.target.files[0];
    this.fileselected=file
  }
  selectedAgence:any
  Function(id:any){
    this.selectedAgence=id
    }
  ErrorMessage:any ;
  role='admin'
  nom : any ; 
  add(f:NgForm){ 
    console.log(f.value)
   var formdata:any=new FormData();
  formdata.append("nom",f.value.nom)
  formdata.append("prenom",f.value.prenom)
  formdata.append("mdp",f.value.mdp)
  formdata.append("genre",f.value.gendre)
  formdata.append("numtel",f.value.numtel)
  formdata.append("cin",f.value.cin)
  formdata.append("email",f.value.email)
  formdata.append("role",this.role)
  formdata.append("image",this.fileselected)

  this.adminService.SignupUser(formdata).subscribe((res)  => {
    this._snackBar.open("Admin registred");

    this.router.navigate(['adminlogin'])

   },(err:HttpErrorResponse)=>{
   this.ErrorMessage=err.error
   console.log(this.ErrorMessage)
  })
 }
}
