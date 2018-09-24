import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexComponent } from './complex.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ComplexComponent', () => {
  let component: ComplexComponent;
  let fixture: ComponentFixture<ComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click button, label abc should appear', () => {
    component.click();
    const element = fixture.nativeElement as HTMLElement;
    const data = element.querySelector('#data');
    fixture.detectChanges();
    expect(data.innerHTML).toBe('abc');
  });
});
