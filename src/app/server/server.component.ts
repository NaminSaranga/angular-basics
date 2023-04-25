import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  serverName:string = 'Server 1';
  serverId:number = 3030;
  serverStatus:string = 'offline';


  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerName(){
    return this.serverName
  }

  getServerStatus(){
    return this.serverStatus
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
