import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputComponent } from './input-output.component';
import { By } from '@angular/platform-browser';

describe('InputOutputComponent', () => {
  let component: InputOutputComponent;
  let fixture: ComponentFixture<InputOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emit', (done) => {
    component.input = 1;
    const button: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
    component.output.subscribe(e => {
      expect(e).toBe(2);
      done();
    });
    button.dispatchEvent(new Event('click'));
    //component.emit();
  });
});
