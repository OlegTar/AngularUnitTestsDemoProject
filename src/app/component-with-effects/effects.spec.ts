import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MyEffects } from '../my-effects';
import { Subject, of, Observable } from 'rxjs';
import { MyService } from '../my.service';
import { RequestGetDataAction, GetDataSuccessAction } from '../reducer2';
import { hot, cold, getTestScheduler} from 'jasmine-marbles';
import { TestHotObservable } from 'jasmine-marbles/src/test-observables';
import { Action } from '@ngrx/store';
import { debounceTime } from 'rxjs/operators';

describe('ComponentWithEffectsComponent', () => {
    const service: jasmine.SpyObj<MyService> = jasmine.createSpyObj('MyService', ['getData2']);
    service.getData2.and.returnValue(of([]));
    let effects: MyEffects;
    let actions: Observable<Action>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
                MyEffects,
                {provide: MyService, useValue: service},
                provideMockActions(() => actions),
            ],
        })
        .compileComponents();
        effects = TestBed.get(MyEffects);
    }));

    it('RequestGetDataAction should be converted to GetDataSuccessAction if services return success', (() => {
        const action = new RequestGetDataAction();
        const completion = new GetDataSuccessAction([]);
        const scheduler = getTestScheduler();

        actions = hot('a', { a: action });
        //debounceTime(400);        
        const expected = cold('b', { b: completion });

        expect(effects.requestGetDataAction$).toBeObservable(expected);
    }));
});
