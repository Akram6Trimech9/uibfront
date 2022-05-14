import { Component, OnInit } from '@angular/core';
import { RdvService } from 'src/app/services/rdv.service';
import { UsersauthService } from 'src/app/services/usersauth.service';

@Component({
  selector: 'app-mesrdv',
  templateUrl: './mesrdv.component.html',
  styleUrls: ['./mesrdv.component.css']
})
export class MesrdvComponent implements OnInit {
text:string=''
  constructor(private rdvService:RdvService ,private clientService:UsersauthService ) { }
  rdv:any[]=[]
  ngOnInit(): void {
    this.rdvService.getrdvbyclient(this.clientService.getuserid()).subscribe(res=>{
    this.rdv=res
    if(!res.confirmed){
this.text="en att"
    }else{
      this.text="accp"
    }
    console.log(res)
    })
  }

}
