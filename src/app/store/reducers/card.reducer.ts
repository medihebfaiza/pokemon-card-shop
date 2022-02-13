import { Action, createReducer, on } from '@ngrx/store'
import { loadCard, cardLoaded } from '../actions/card.actions'

export const initialState = {}

const _cardReducer = createReducer(
    initialState,
    on(loadCard, (state) => ({...state, loading: true})),
    on(cardLoaded, (state, {card}) => ({...state, ...card, loading: false})),
  );
  
// TODO remove any
export function cardReducer(state: any = initialState, action: Action) {
  return _cardReducer(state, action)
}