import { Action, createReducer, on } from '@ngrx/store'
import { CartItem } from 'src/app/models/cartItem'
import { addCardToCart, incrementQuantInCart, decrementQuantInCart, removeCardFromCart, emptyCardFromCart } from '../actions/cart.actions'
import { cardIsInCart } from '../../utils'

export const initialState : CartItem[] = []

const _cartReducer = createReducer(
    initialState,
    on(addCardToCart, (state, {card}) =>  !cardIsInCart(card, state) ? [...state, new CartItem(card)] : state),
    on(incrementQuantInCart, (state, {id}) => state.map(item => item.card.id == id ? item.increment() : item )),
    on(decrementQuantInCart, (state, {id}) => state.map(item => item.card.id == id  ? item.decrement() : item )),
    on(removeCardFromCart, (state, {id}) => state.filter(item => item.card.id != id)),
    on(emptyCardFromCart, _ => initialState),
  );
  
export function cartReducer(state: CartItem[] = initialState, action: Action) {
  return _cartReducer(state, action)
}