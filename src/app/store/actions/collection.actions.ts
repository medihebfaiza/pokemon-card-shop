import { createAction, props } from '@ngrx/store';
import { Card } from '../../models/card';

export const addCardToCollection = createAction('[Collection Component] Add Card to Collection', props<{card : Card}>())
export const removeCardFromCollection = createAction('[Collection Component] Remove Card from Collection', props<{id : string}>())