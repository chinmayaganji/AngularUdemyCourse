import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server Created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['test Server', 'test Server 2'];

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'server Created with the name ' + this.serverName;
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }

  constructor() {
    setTimeout(() => (this.allowNewServer = true), 3000);
  }

  ngOnInit(): void {}
}
