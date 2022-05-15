import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgenceService } from 'src/app/services/agence.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('closeModal')
  closeModal!: ElementRef;

  form!:FormGroup

  constructor(private agenceservice:AgenceService,private fb:FormBuilder,private router:Router) {
    let formcontrols={
      conseil: [null, Validators.required],
      }
     this.form=this.fb.group(formcontrols)
   }

  ngOnInit(): void {
    this.getallAgences()
    //this.getconseiller()
  }
  image:any
  element:any
  Agences:any=[]
  getallAgences(){
  this.agenceservice.get().subscribe(res=>{
    this.Agences=res 
  })
  }
  selectedConseiller:any;
//   OnSelectchange(ob: { value: any; }) {
//     this.selectedConseiller = ob.value;
//    console.log(this.selectedConseiller);
//  }
Calendar:boolean=true
Function(id:any){
  this.selectedConseiller=id
  if(this.selectedConseiller!=null){
    this.router.navigate([`calendar`,id]);
    this.closeModal.nativeElement.click() 

  }
  }
  Conseiller:any=[]

   goto(id:String){
      console.log(id)
     this.agenceservice.getagenceByid(id).subscribe(res=>{
        this.Conseiller=res.conseillers
        console.log(this.Conseiller)

    })}
  
  

  

 
}
