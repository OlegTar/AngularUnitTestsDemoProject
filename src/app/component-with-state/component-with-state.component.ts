import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { Subscription } from 'rxjs';
import { getValue, IncrementAction } from '../reducer';

@Component({
  selector: 'app-component-with-state',
  templateUrl: './component-with-state.component.html',
  styleUrls: ['./component-with-state.component.css']
})
export class ComponentWithStateComponent implements OnInit, OnDestroy {
  value: number;
  subcription = new Subscription();
  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.subcription.add(this.store.pipe(select(getValue)).subscribe(value => {
      this.value = value;
    }));
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  Increment() {
    this.store.dispatch(new IncrementAction());
  }
}
