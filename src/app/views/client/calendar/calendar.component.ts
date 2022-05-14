import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular';
import { Subscription } from 'rxjs';
import { RdvService } from 'src/app/services/rdv.service';
import { UsersauthService } from 'src/app/services/usersauth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @ViewChild('openModal', {static: true}) openModal!: ElementRef;
id:any;
  constructor(private _snackBar: MatSnackBar,private route:ActivatedRoute,private userService:UsersauthService,private rdvservice:RdvService,userservice:UsersauthService) { }
  private routeSub!: Subscription;
Conseiller:any
Calendrier:any;
Events: any[] = [];
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) 
      this.id=params['id']
      console.log(params['id']) 
      this.userService.getuserByid(this.id).subscribe(res=>{
        this.Conseiller=res
        this.Calendrier=res.calendar
            this.Events.push({
              start:this.Calendrier.notavailabledays.begin.slice(0,this.Calendrier.notavailabledays.begin.length-14),
              end:this.Calendrier.notavailabledays.end.slice(0,this.Calendrier.notavailabledays.end.length-14),
              color:'#ff0000',
              textColor:'white',
              title: 'Reserved'
            },
            {  start:this.Calendrier.firstday.slice(0,this.Calendrier.firstday.length-14),
              end:this.Calendrier.lastday.slice(0,this.Calendrier.lastday.length-14),
              color:'#008000',
              textColor:'white',
              title: `Work @${this.Calendrier.starthour} jusquA ${this.Calendrier.lasthour}`
            },
            )
            console.log(this.Events)
      })
    });
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',

    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: this.Events
    // [
    //   { color:'#ff0000',textColor:'white' ,title: 'Reserved', start: '2022-05-14',end:'2022-05-17' } 
    // ]
  };
  date!:string
  handleDateClick(arg: { dateStr: string; }) {
    this.openModal.nativeElement.click() 

     this.date=arg.dateStr
    //alert('date click! ' + arg.dateStr)
    //eventColor: '#378006'
  }
  variable:boolean=true ;
  participants:any=[]
  createrdv(f:NgForm){
    this.participants.push(this.userService.getuserid())
    this.participants.push(this.id)
    const  rdv:any={
     "title":f.value.title,
     "date":this.date,
     "hour":f.value.time,
     "participants":this.participants
    } 
  this.rdvservice.createnewrdv(rdv).subscribe(res=>{
    this._snackBar.open("rdv Added");
    window.location.reload()

    this.variable=false ; 
  })
  }

}
