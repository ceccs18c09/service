import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/infoservice';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

    
  }

title="anjana"
functionclick(){
  
const service =new myservice();
service.buttonclick(this.title)

}
}