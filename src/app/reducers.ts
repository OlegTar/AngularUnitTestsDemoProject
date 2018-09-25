import { ActionReducerMap } from '@ngrx/store';
import { State, reducer } from './reducer';
import { State2, reducer2 } from './reducer2';

export interface AppState {
    state: State;
    state2: State2;
}

export const reducers: ActionReducerMap<AppState> = {
    state: reducer,
    state2: reducer2
};
