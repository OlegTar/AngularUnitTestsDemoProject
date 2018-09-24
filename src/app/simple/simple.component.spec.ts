import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent } from './simple.component';

describe('SimpleComponent', () => {
  let component: SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent);
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
