import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AgenceService } from 'src/app/services/agence.service';
import { UsersauthService } from 'src/app/services/usersauth.service';
 
@Component({
  selector: 'app-registre-cons',
  templateUrl: './registre-cons.component.html',
  styleUrls: ['./registre-cons.component.css']
})
export class RegistreConsComponent implements OnInit {

  constructor(private ConseillerService:UsersauthService,private router:Router,private agenceService:AgenceService) { }
  agences:any[]=[]
  ngOnInit(): void {
    this.agenceService.get().subscribe(res=>{
      this.agences=res
    })
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
  role='conseiller'
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
  this.ConseillerService.SignupUser(formdata).subscribe((res)  => {
    const   conseillerLogin:any={
     'email':f.value.email,
      'mdp':f.value.mdp
    }
     this.ConseillerService.Login(conseillerLogin).subscribe((data)=>{
      this.ConseillerService.issavetoken(data.token,data.role,data.nom)
      this.agenceService.addconseillet(this.selectedAgence,this.ConseillerService.getuserid(),formdata).subscribe((data)=>{
        console.log(data)
      })

      this.router.navigate(['conseiller/calendar'])
      })
   },(err:HttpErrorResponse)=>{
   this.ErrorMessage=err.error
   console.log(this.ErrorMessage)
  })
 }


  

}
