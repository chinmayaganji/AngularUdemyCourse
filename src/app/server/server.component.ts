import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  //selector: '[app-server]', // selector as a attribute
  templateUrl: './server.component.html',
  styleUrls:['./server.style.css']
})
export class ServerComponent {
  id=1;
  status=""

  constructor(){
    this.status=Math.random()>0.5 ?"online":"offline"
  }

  getColor(){
    if(this.status==="offline"){
      return "red"
    }
    return "green"
  }
}
