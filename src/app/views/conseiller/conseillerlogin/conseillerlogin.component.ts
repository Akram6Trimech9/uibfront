import { Component, OnInit } from '@angular/core';
import { RdvService } from 'src/app/services/rdv.service';
import { UsersauthService } from 'src/app/services/usersauth.service';

@Component({
  selector: 'app-conseillerlogin',
  templateUrl: './conseillerlogin.component.html',
  styleUrls: ['./conseillerlogin.component.css']
})
export class ConseillerloginComponent implements OnInit {

  constructor(private rdvService:RdvService,private userService:UsersauthService) { }
  
ConseillerRdv:any[]=[]
  ngOnInit(): void {
    this.rdvService.getrdvbyconseiller(this.userService.getuserid()).subscribe(res=>{
   this.ConseillerRdv=res
   console.log(this.ConseillerRdv)
    })
  }

}
