import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AgenceService } from 'src/app/services/agence.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersauthService } from 'src/app/services/usersauth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  @ViewChild('CloseModal', {static: true}) CloseModal!: ElementRef;
  conseillersByagence : any [] = [];
  Events: any[] = [];
  agences :any [] = [];
  idagence: String =""
  constructor(private agenceService:AgenceService,private _snackBar: MatSnackBar,private userService:UsersauthService) { }

  ngOnInit(): void {
    this.agenceService.get().subscribe(res=>{
      this.agences=res
    })
  }



  deleteAgence(id:String){
    this.agenceService.deleteAgence(id).subscribe(res=>{
      this._snackBar.open("Agence deleted");
      this.agences=this.agences.filter(agence=>agence._id!=id);
    })
  }

  addAgence(addform : NgForm){
    var formdata:any=new FormData();
    console.log(addform.value.title);
  
    formdata.append("title",addform.value.title);
    formdata.append("addresse",addform.value.addresse);
    formdata.append("image",this.fileselected);

    this.agenceService.addagence(formdata).subscribe(res=>{
      this._snackBar.open("Agence added");
      this.CloseModal.nativeElement.click(); 
      window.location.reload();
  })}


  fileselected:any
  
  onFileSelected(event:any) {
    const file:File = event.target.files[0];
    this.fileselected=file
  }


  deleteConseiller(id:String){
    this.agenceService.deleteConseiller(this.idagence,id).subscribe(res=>{
      this._snackBar.open("conseiller deleted");
      this.conseillersByagence=this.conseillersByagence.filter(conseiller=>conseiller._id!=id)
    })
  }


  validateConseiller(id:String){
    this.userService.validateUser(id).subscribe(res=>{
      this._snackBar.open("conseiller validated");

    })
  }

  showconseillers(id:String){
    this.idagence=id;
    this.agenceService.getagenceByid(id).subscribe(res=>{
      this.conseillersByagence=res.conseillers;
      console.log(res)})
  }
  selectedAgence:any
  Function(id:any){
    this.selectedAgence=id
    }

  updateAgence(updateform:NgForm){
     var formdata:any=new FormData();


    formdata.append("title",updateform.value.title)
    formdata.append("addresse",updateform.value.addresse)
    formdata.append("image",this.fileselected)
  
    this.agenceService.updateagence(formdata,this.selectedAgence).subscribe(res=>{
      this._snackBar.open("Agence updated");
      this.CloseModal.nativeElement.click(); 
      window.location.reload();
  })

}
  

}
