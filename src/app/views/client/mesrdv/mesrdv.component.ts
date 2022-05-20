import { Component, OnInit } from '@angular/core';
import { RdvService } from 'src/app/services/rdv.service';
import { UsersauthService } from 'src/app/services/usersauth.service';

@Component({
  selector: 'app-mesrdv',
  templateUrl: './mesrdv.component.html',
  styleUrls: ['./mesrdv.component.css']
})
export class MesrdvComponent implements OnInit {
  constructor(private rdvService:RdvService ,private clientService:UsersauthService ) { }
  rdv:any[]=[]
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

}
