import { Actions, ofType, Effect } from '@ngrx/effects';
import { MyService } from './my.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Action } from '@ngrx/store';
import { MyAction, REQUEST_GET_DATA, RequestGetDataAction, GetDataErrorAction,
    GetDataSuccessAction, TEST_ACTION, TestAction, TestAction2 } from './reducer2';
import { switchMap, map, catchError, debounceTime } from 'rxjs/operators';
import { of, from, Scheduler } from 'rxjs';
import { asyncScheduler } from 'rxjs';

@Injectable()
export class MyEffects {
    constructor(private service: MyService, private actions$: Actions) {}

    @Effect()
    requestGetDataAction2$: Observable<Action> = this.actions$.pipe(
        ofType(REQUEST_GET_DATA),
        debounceTime(400),
        switchMap((action: RequestGetDataAction) => {
            return this.service.getData2().pipe(
                map(strings => new GetDataSuccessAction(strings)),
                catchError(e => of(new GetDataErrorAction()))
            );
        })
    );

    @Effect()
    requestGetDataAction$: (time: number, scheduler: Scheduler) => Observable<Action> =
        (time = 400, scheduler = asyncScheduler) => this.actions$.pipe(
        ofType(REQUEST_GET_DATA),
        debounceTime(time, scheduler),
        switchMap((action: RequestGetDataAction) => {
            return this.service.getData2().pipe(
                map(strings => new GetDataSuccessAction(strings)),
                catchError(e => of(new GetDataErrorAction()))
            );
        })
    )

    // tslint:disable-next-line:member-ordering
    @Effect()
    testAction$: Observable<Action> = this.actions$.pipe(
        ofType(TEST_ACTION),
        switchMap((action: TestAction) => {
            return from(action.payload.map(n => new TestAction2(n)));
        })
    );
}
