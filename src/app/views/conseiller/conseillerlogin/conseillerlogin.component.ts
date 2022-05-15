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
  confirmRdv(rdv:any){
    let index = rdv.participants.findIndex((participant:any) => { return participant._id != this.userService.getuserid()});
    this.rdvService.confirmerRdv(rdv._id,rdv.participants[index]._id,true).subscribe((res:any)=>{
      let  rdvindex = this.ConseillerRdv.findIndex((rdv:any)=>{
        return rdv._id == res.rdv_updated._id
      })
      this.ConseillerRdv[rdvindex].confirmed=true;

    
    }
      
      )
  }
  refuserRdv(rdv:any){
    let index = rdv.participants.findIndex((participant:any) => { return participant._id != this.userService.getuserid()});
    this.rdvService.confirmerRdv(rdv._id,rdv.participants[index]._id,false).subscribe((res:any)=>{
    }
      
      )
  }

}
