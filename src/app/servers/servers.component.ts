import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = true;
  serverCreationStatus = 'Not created yet';
  serverName = '';
  serverPort = '';

  constructor(){
    setTimeout(()=>{
      this.allowNewServer = false;
    },2000);
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server created ' + this.serverName;
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(){}
}
