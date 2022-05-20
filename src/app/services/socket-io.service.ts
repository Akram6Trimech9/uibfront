import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import  {io} from 'socket.io-client';
import { webSocket } from 'rxjs/webSocket';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})

export class SocketIoService {
  constructor(private socket:Socket) { 

  }

  getNotifications(event:String){
    let message = event.toString();
    return new Observable((subscriber)=>{
      this.socket.on(message,(data:any)=>{
           subscriber.next(data);   
      })
    })
    
  }


  sendToServer(message:string,data:any){
    this.socket.emit(message,data);
  }


  connectToServer(token:String){
      this.socket.emit("connect-server",{token:token});  
  }
  
}
