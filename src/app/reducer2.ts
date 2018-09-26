import { Action, createSelector } from '@ngrx/store';
import { AppState } from './reducers';

export const REQUEST_GET_DATA = 'Request Get Data';
export const GET_DATA_SUCCESS = 'Get Data Success';
export const GET_DATA_ERROR = 'Get Data Error';

export const TEST_ACTION = 'Test action';
export const TEST_ACTION2 = 'Test action 2';

export class RequestGetDataAction implements Action {
    type = REQUEST_GET_DATA;
}

export class GetDataSuccessAction implements Action {
    type = GET_DATA_SUCCESS;
    constructor(public payload: string[]) {}
}

export class GetDataErrorAction implements Action {
    type = GET_DATA_ERROR;
}

export class TestAction implements Action {
    type = TEST_ACTION;

    constructor (public payload: number[]) {}
}

export class TestAction2 implements Action {
    type = TEST_ACTION2;

    constructor (public payload: number) {}
}

export type MyAction = RequestGetDataAction | GetDataSuccessAction | GetDataErrorAction;


export interface State2 {
    strings: string[];
}

export const initState: State2 = {
    strings: ['init']
};

export function reducer2(state = initState, action: MyAction): State2 {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {
                ...state,
                strings: (action as GetDataSuccessAction).payload
            };
        default:
            return state;
    }
}


export const getStrings = createSelector(
    (state_: AppState) => state_.state2,
    (state2: State2) => state2.strings);
