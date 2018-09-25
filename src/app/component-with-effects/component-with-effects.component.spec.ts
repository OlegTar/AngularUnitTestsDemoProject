import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWithEffectsComponent } from './component-with-effects.component';

describe('ComponentWithEffectsComponent', () => {
  let component: ComponentWithEffectsComponent;
  let fixture: ComponentFixture<ComponentWithEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentWithEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentWithEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
