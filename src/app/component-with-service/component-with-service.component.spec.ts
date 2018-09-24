import { HttpClientModule, HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentWithServiceComponent } from './component-with-service.component';
import { MyServiceService } from '../my-service.service';
import { of } from 'rxjs/internal/observable/of';
import { By } from '@angular/platform-browser';
import { throwError, defer } from 'rxjs';


describe('ComponentWithServiceComponent', () => {
  let component: ComponentWithServiceComponent;
  let fixture: ComponentFixture<ComponentWithServiceComponent>;
  const fakeService: jasmine.SpyObj<MyServiceService> = jasmine.createSpyObj('MyServiceService', ['getData']);
  fakeService.getData.and.returnValue(of(['a', 'b']));

  const fakeServiceHttp: jasmine.SpyObj<HttpClient> = jasmine.createSpyObj('HttpClient', ['get']);
  fakeServiceHttp.get.and.returnValue(of(['c', 'd']));
  //fakeServiceHttp.get.and.callFake(() => defer(() => Promise.reject()));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ComponentWithServiceComponent ],
      providers: [
        //{provide: MyServiceService, useValue: fakeService},
        {provide: HttpClient, useValue: fakeServiceHttp}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('service returns a, b, first div should be a', () => {
    const els = fixture.debugElement.queryAll(By.css('div'));
    const div = els[0].nativeElement as HTMLDivElement;
    expect(div.innerText).toBe('c');
  });

  it('service throws errors, no divs', () => {
    //const fakeHttp: jasmine.SpyObj<HttpClient> = TestBed.get(HttpClient);
    fixture = TestBed.createComponent(ComponentWithServiceComponent);
    component = fixture.componentInstance;
    const fakeHttp2: jasmine.SpyObj<HttpClient> = TestBed.get(HttpClient);
    fakeHttp2.get.and.callFake(() => throwError('test'));
    component.ngOnInit();
    fixture.detectChanges();
    const els = fixture.debugElement.queryAll(By.css('div'));
    expect(els.length).toBe(0);
  });
});
