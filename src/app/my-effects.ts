import { Actions, ofType, Effect } from '@ngrx/effects';
import { MyServiceService } from './my-service.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Action } from '@ngrx/store';
import { MyAction, REQUEST_GET_DATA, RequestGetDataAction, GetDataErrorAction, GetDataSuccessAction } from './reducer2';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MyEffects {
    constructor(private service: MyServiceService, private actions$: Actions) {}

    @Effect()
    requestGetDataAction$: Observable<Action> = this.actions$.pipe(
        ofType(REQUEST_GET_DATA),
        switchMap((action: RequestGetDataAction) => {
            return this.service.getData2().pipe(
                map(strings => new GetDataSuccessAction(strings)),
                catchError(e => of(new GetDataErrorAction()))
            );
        })
    );
}
