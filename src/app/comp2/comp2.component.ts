import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/infoservice';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="anjana"
  functionclick(){
    
  const service =new myservice();
  service.buttonclick(this.title)
  
  }
}
