import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  data: string;

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.data = 'abc';
  }
}
