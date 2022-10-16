import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/infoservice';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="anjana"
  functionclick(){
    
  const service =new myservice();
  service.buttonclick(this.title)
  
  }
}
