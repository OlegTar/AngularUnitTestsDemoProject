import { Action, createSelector } from '@ngrx/store';
import { AppState } from './reducers';

const INCREMENT = 'Increment';

export class IncrementAction implements Action {
    type = INCREMENT;
}

export interface State {
    value: number;
}

export const initState = {
    value: 0
};

export function reducer(state = initState, action: Action): State {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            };
        default:
            return state;
    }
}

export const getValue = createSelector(
    (state_: AppState) => state_.state,
    (state2: State) => state2.value);
