import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { Observable } from 'rxjs';
import { getStrings, RequestGetDataAction, TestAction } from '../reducer2';

@Component({
  selector: 'app-component-with-effects',
  templateUrl: './component-with-effects.component.html',
  styleUrls: ['./component-with-effects.component.css']
})
export class ComponentWithEffectsComponent implements OnInit {

  strings: Observable<string[]>;
  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.strings = this.store.pipe(select(getStrings));
  }

  getData() {
    this.store.dispatch(new RequestGetDataAction());
  }

  testAction() {
    this.store.dispatch(new TestAction([1, 2, 3]));
  }
}
