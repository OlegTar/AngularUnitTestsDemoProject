import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { fakeAsync, tick, TestBed, ComponentFixture } from '@angular/core/testing';
import { SimpleComponent } from './simple/simple.component';

describe('first group of tests', () => {
    it('name of test', () => {
        const component = new SimpleComponent();
        component.click();
        expect(component.data).toBe('abc');
    });
});

describe('component with TestBed', () => {
    let fixture: ComponentFixture<SimpleComponent>;
    let component: SimpleComponent;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ SimpleComponent ]
        });
        fixture = TestBed.createComponent(SimpleComponent);
        component = fixture.componentInstance;
    });

    it('name of test', () => {
        const nativeElement = fixture.nativeElement as HTMLElement;
        // component.click();
        nativeElement.querySelector('#button').dispatchEvent(new Event('click'));
        fixture.detectChanges();
        const element = nativeElement.querySelector('#data') as HTMLElement;
        expect(element.innerText).toBe('abc');
    });
});

class TestClass {
    public a: number;
    constructor() {
        of(1).pipe(delay(5000)).subscribe((a) => {
            this.a = 1;
        });
    }
}

// describe('second group of tests', () => {
//     it('name of test', (done) => {
//         const test = new TestClass();
//         setTimeout(function() {
//             expect(test.a).toBe(1);
//             done();
//         }, 5000);
//     });
// });


describe('second group of tests', () => {
    it('name of test', fakeAsync(() => {
        const test = new TestClass();
        tick(5000);
        expect(test.a).toBe(1);
    }));
});
