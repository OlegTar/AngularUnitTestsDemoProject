import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-host',
  template: `
  <app-input-output [input]="input" (output)="outputCheck($event)">
  </app-input-output>
  `,
  styles: []
})
export class TestHostComponent implements OnInit {
  input: number;
  result: number;
  constructor() { }

  ngOnInit() {
  }

  outputCheck(n: number) {
    this.result = n;
  }
}
