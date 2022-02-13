import { Action, createReducer, on } from '@ngrx/store'
import { CartItem } from 'src/app/models/cartItem';
import { addCardToCart, incrementQuantInCart, decrementQuantInCart, removeCardFromCart } from '../actions/cart.actions'

export const initialState : CartItem[] = []

const _cartReducer = createReducer(
    initialState,
    on(addCardToCart, (state, {card}) => [...state, new CartItem(card)]),
    on(incrementQuantInCart, (state, {id}) => {
      return state.map(item => item.card.id == id ? item.increment() : item )
    }),
    on(decrementQuantInCart, (state, {id}) => {
      return state.map(item => item.card.id == id  ? item.decrement() : item ) 
    }),
    on(removeCardFromCart, (state, {id}) => state.filter(item => item.card.id != id)),
  );
  
export function cartReducer(state: CartItem[] = initialState, action: Action) {
  return _cartReducer(state, action)
}