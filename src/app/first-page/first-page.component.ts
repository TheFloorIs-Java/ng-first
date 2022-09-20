import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  t1 : String = "Alpha";
  t2 : String = "Bravo";
  t3 : String = "Charlie";
  t4 : String = "Delta";
  t5 : String = "Echo";
  constructor() { }

  ngOnInit(): void {
  }

}
