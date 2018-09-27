import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
  @Input() input: number;
  @Output() output = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  emit() {
    this.output.emit(this.input * 2);
  }
}
