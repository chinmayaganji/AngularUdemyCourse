import { Component } from '@angular/core';

@Component({
  //selector: 'app-server',
  selector: '[app-server]', // selector as a attribute
  templateUrl: './server.component.html',
})
export class ServerComponent {
  id=1;
  status= " offline"
}
