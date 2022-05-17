import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import  {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})

export class SocketIoService {
  socket : any ;
  constructor() { 
    this.socket =io("ws://localhost:3000");

  }

  getNotifications(event:String){
    return new Observable((subscriber)=>{
      this.socket.on(event,(data:any)=>{
            console.log(data);
           subscriber.next(data);   
      })
    })
  }

  connectToServer(token:String){
      this.socket.emit("connect-server",{token:token});      
  }
  
}
