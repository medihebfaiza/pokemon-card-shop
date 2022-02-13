import { createAction, props } from '@ngrx/store';
import { Card } from '../../models/card';

export const addCardToCart = createAction('[Cart Component] Add Card to Cart', props<{card : Card}>())
export const incrementQuantInCart = createAction('[Cart Component] Increment Card quantity in Cart', props<{id : string}>())
export const decrementQuantInCart = createAction('[Cart Component] Decrement Card quantity in Cart', props<{id : string}>())
export const removeCardFromCart = createAction('[Cart Component] Remove Card from Cart', props<{id : string}>())