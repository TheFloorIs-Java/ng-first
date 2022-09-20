import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  @Input()
  title : String = "";
  
  x : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment():void {
    this.x = this.x+1;
  }

}