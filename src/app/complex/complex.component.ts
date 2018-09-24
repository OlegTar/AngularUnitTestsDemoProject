import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.css'],
})
export class ComplexComponent implements OnInit {
  data: string;

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.data = 'abc';
  }
}
