import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeedbackService } from 'src/app/services/feedback.service';
import { RdvService } from 'src/app/services/rdv.service';
import { UsersauthService } from 'src/app/services/usersauth.service';

@Component({
  selector: 'app-mesrdv',
  templateUrl: './mesrdv.component.html',
  styleUrls: ['./mesrdv.component.css']
})
export class MesrdvComponent implements OnInit {
  @ViewChild('CloseModal', {static: true}) CloseModal!: ElementRef;

  constructor(private rdvService:RdvService ,private clientService:UsersauthService,private feedbackService:FeedbackService,private   _snackBar : MatSnackBar
  ) { }
  rdv:any[]=[]
  rdv_id : String ="";
  ngOnInit(): void {
    this.rdvService.getrdvbyclient(this.clientService.getuserid()).subscribe(res=>{
    this.rdv=res
    this.rdv.map(rend=>{
      rend.date=rend.date.split('T')[0]
      const conseiller = rend.participants[rend.participants.findIndex((participant: any)=>{return participant._id != this.clientService.getuserid()})]
      rend.conseiller = conseiller.nom + " " + conseiller.prenom;
    })
    })
  }
  annulerRdv(rdv:any){
    let index = rdv.participants.findIndex((participant:any) => { return participant._id !== this.clientService.getuserid()});
this.rdvService.annulerrdv(rdv._id,rdv.participants[index]._id).subscribe(res=>{
  if (res){
    this.rdv = this.rdv.filter(rendv=>rendv._id!=rdv._id);
  }
})

  }
  addRdv(id:String){
      this.rdv_id=id;
  }

  addFeedback(form : NgForm){
      const feedback = {
        feedback:form.value.feedback,
        rdv:this.rdv_id
      }
      this.feedbackService.createFeedback(feedback).subscribe(res=>{
        this._snackBar.open("feedback submited");

      })
      
  }
}
