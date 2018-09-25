import { reducer, State } from './reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    state: State;
}

export const reducers: ActionReducerMap<AppState> = {
    state: reducer
};
