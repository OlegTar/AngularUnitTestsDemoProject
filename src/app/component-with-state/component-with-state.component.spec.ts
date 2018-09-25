import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWithStateComponent } from './component-with-state.component';
import { StoreModule, Store, select } from '@ngrx/store';
import { reducers } from '../reducers';
import { getValue, IncrementAction } from '../reducer';

describe('ComponentWithStateComponent', () => {
  let component: ComponentWithStateComponent;
  let fixture: ComponentFixture<ComponentWithStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(reducers, {
        // initialState: {
        //   state: {
        //     value: 1,
        //   }
        // }
      })],
      declarations: [ ComponentWithStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentWithStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('init state should be zero', () => {
    const store = TestBed.get(Store);
    store.pipe(select(getValue)).subscribe(value => {
      expect(value).toBe(0);
    });
  });

  it('after Increment value should be 1', () => {
    const store = TestBed.get(Store);
    //component.Increment();
    store.dispatch(new IncrementAction());
    store.pipe(select(getValue)).subscribe(value => {
      expect(value).toBe(1);
    });
  });
});
