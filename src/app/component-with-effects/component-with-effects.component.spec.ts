import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';

import { ComponentWithEffectsComponent } from './component-with-effects.component';
import { MyEffects } from '../my-effects';
import { MyService } from '../my.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../reducers';
import { of } from 'rxjs/internal/observable/of';
import { By } from '@angular/platform-browser';

describe('ComponentWithEffectsComponent', () => {
  let component: ComponentWithEffectsComponent;
  let fixture: ComponentFixture<ComponentWithEffectsComponent>;
  const fakeService = jasmine.createSpyObj('MyService', ['getData2']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([MyEffects])
      ],
      providers: [
        {provide: MyService, useValue: fakeService}
      ],
      declarations: [ ComponentWithEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentWithEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    const service: jasmine.SpyObj<MyService> = TestBed.get(MyService);
    service.getData2.and.returnValue(of(['a']));
    component.getData();
    tick(400);
    fixture.detectChanges();
    const div = fixture.debugElement.queryAll(By.css('div'))[0].nativeElement as HTMLDivElement;
    expect(div.innerText).toBe('a');
  }));
});
