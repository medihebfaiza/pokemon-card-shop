import { Action, createReducer, on } from '@ngrx/store'
import { loadCatalog, catalogLoaded } from '../actions/catalog.actions'
import { Catalog } from 'src/app/models/catalog';

export const initialState : Catalog = new Catalog()

const _catalogReducer = createReducer(
    initialState,
    on(loadCatalog, (state) => ({...state, loading: true})),
    on(catalogLoaded, (state, {cards}) => ({...state, cards, loading: false})),
  );

export function catalogReducer(state: Catalog = initialState, action: Action) {
  return _catalogReducer(state, action)
}