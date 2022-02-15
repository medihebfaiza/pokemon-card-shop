import { Action, createReducer, on } from '@ngrx/store'
import { addCardToCollection, removeCardFromCollection } from '../actions/collection.actions'
import { cardIsInCollection } from '../../utils'
import { Card } from 'src/app/models/card';

export const initialState : Card[] = []

const _collectionReducer = createReducer(
    initialState,
    on(addCardToCollection, (state, {card}) =>  !cardIsInCollection(card, state) ? [...state, card] : state),
    on(removeCardFromCollection, (state, {id}) => state.filter(item => item.id != id)),
  );
  
export function collectionReducer(state: Card[] = initialState, action: Action) {
  return _collectionReducer(state, action)
}