import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHostComponent } from './test-host.component';
import { InputOutputComponent } from './input-output.component';
import { By } from '@angular/platform-browser';

describe('TestHostComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, InputOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('input-output emit', () => {
    component.input = 1;
    fixture.detectChanges(); // update child
    const button: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(component.result).toBe(2);
  });
});
