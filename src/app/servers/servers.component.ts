import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'Not created yet';
  serverName = 'Testserver';
  serverPort = '';
  username = '';
  serverCreated = false;
  servers = ['Testserver','Testserver 2'];
  showSecret = false;
  logs : any= [];
  vals : any = [];
  
  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server created ' + this.serverName;
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUserName(){
    this.username = '';
  }

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.logs.push(this.logs.length + 1);
  }

  onIndexToggleDetails(){
    this.vals.push(this.vals.length + 1);
  }

  ngOnInit(){}
}
