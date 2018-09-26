import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MyEffects } from '../my-effects';
import { Subject, of, Observable } from 'rxjs';
import { MyService } from '../my.service';
import { RequestGetDataAction, GetDataSuccessAction, TestAction, TestAction2 } from '../reducer2';
import { hot, cold, getTestScheduler} from 'jasmine-marbles';
import { TestScheduler } from 'rxjs/testing';
import { TestHotObservable } from 'jasmine-marbles/src/test-observables';
import { Action } from '@ngrx/store';
import * as rxjs from 'rxjs/operators';
import { Effect, EffectsModule } from '@ngrx/effects';
import { EffectsFeatureModule } from '@ngrx/effects/src/effects_feature_module';

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
        const expected = cold('-b', { b: completion });

       // expect(effects.requestGetDataAction2$).toBeObservable(expected);
       expect(effects.requestGetDataAction$(10, scheduler)).toBeObservable(expected);
    }));

    it('RequestGetDataAction should be converted to GetDataSuccessAction if services return success 2', (() => {
        const action = new RequestGetDataAction();
        const completion = new GetDataSuccessAction([]);
        const scheduler = new TestScheduler((a, e) => {
            expect(a).toEqual(e);
        });
        scheduler.run(helpers => {
            actions = helpers.hot('a', { a: action });
            helpers.expectObservable(effects.requestGetDataAction2$).toBe('400ms b', { b: completion });
        });
    }));

    it('RequestGetDataAction should be converted to GetDataSuccessAction if services return success', (() => {
        const action = new TestAction([1, 2, 3]);
        const exp1 = new TestAction2(1);
        const exp2 = new TestAction2(2);
        const exp3 = new TestAction2(3);

        actions = hot('a', { a: action });
        const expected = cold('(abc)', { a: exp1, b: exp2, c: exp3 });

        expect(effects.testAction$).toBeObservable(expected);
    }));
});
