import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AgenceService } from 'src/app/services/agence.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  @ViewChild('CloseModal', {static: true}) CloseModal!: ElementRef;

  Events: any[] = [];
  agences :any [] = [];
  constructor(private agenceService:AgenceService,private _snackBar: MatSnackBar) { }

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
