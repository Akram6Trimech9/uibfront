import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersauthService } from 'src/app/services/usersauth.service';
import { CalendarOptions } from '@fullcalendar/angular';
import { NgForm } from '@angular/forms';
import { CalendarService } from 'src/app/services/calendar.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-conseillerdash',
  templateUrl: './conseillerdash.component.html',
  styleUrls: ['./conseillerdash.component.css']
})
export class ConseillerdashComponent implements OnInit {

  @ViewChild('CloseModal', {static: true}) CloseModal!: ElementRef;

  constructor(private _snackBar: MatSnackBar,private userauth:UsersauthService,private calendarService:CalendarService) {
   }


  Events: any[] = [];
  id=''
  image=''
  Conseiller:any; 
  Calendrier:any
  calendarOptions: CalendarOptions = {}
  ngOnInit(): void {

    this.id=this.userauth.getuserid()
    this.userauth.getuserByid(this.id).subscribe(res=>{
      this.Conseiller=res
      this.Calendrier=res.calendar
          this.Events.push({
            start:this.Calendrier.notavailabledays.begin.slice(0,this.Calendrier.notavailabledays.begin.length-14),
            end:this.Calendrier.notavailabledays.end.slice(0,this.Calendrier.notavailabledays.end.length-14),
            color:'#ff0000',
            textColor:'white',
            title: 'Reserved'
          },
          {
            start:this.Calendrier.firstday.slice(0,this.Calendrier.firstday.length-14),
            end:this.Calendrier.lastday.slice(0,this.Calendrier.lastday.length-14),
            color:'#008000',
            textColor:'white',
          
            title: `Work @${this.Calendrier.starthour} jusquA ${this.Calendrier.lasthour}`
          },
          )
          this.calendarOptions={
            initialView: 'dayGridMonth',
            dateClick: this.handleDateClick.bind(this), // bind is important!
            events:this.Events
            // [
            //   
            // ]
          };
          console.log(this.Events)
    })
    
  } 
 
  date!:string
  handleDateClick(arg: { dateStr: string; }) {
    // this.openModal.nativeElement.click() 
     this.date=arg.dateStr
    //alert('date click! ' + arg.dateStr)
    //eventColor: '#378006'
  }
  add(f:NgForm){
    console.log(f.value)
  
    const calendar:any={
    "firstday":f.value.firstday,
    "lastday":f.value.lastday,
    "starthour":f.value.starthour,
    "lasthour":f.value.lasthour,
    "notavailabledays":{
      "begin":f.value.begin,
      "end":f.value.end,
    }
    }
    this.calendarService.createCalendar(this.id,calendar).subscribe(res=>{
      this._snackBar.open("Calendar added");

      this.CloseModal.nativeElement.click() 
      window.location.reload()
  })
  }
 

  

}
