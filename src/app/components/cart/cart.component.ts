import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppState } from 'src/app/models/app.state'
import { incrementQuantInCart, decrementQuantInCart, removeCardFromCart, emptyCardFromCart } from 'src/app/store/actions/cart.actions'
import { CartItem } from 'src/app/models/cartItem'
import { getCardMarketPrice } from '../../utils'
import { calculateCartTotal } from '../../utils'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart$: Observable<CartItem[]>
  total: number = 0

  getCardMarketPrice = getCardMarketPrice

  constructor(private store: Store<AppState>) {
    this.cart$ = store.select('cart')
    this.cart$.subscribe(cart => this.total = calculateCartTotal(cart))
  }

  ngOnInit(): void {
  }

  incrementQuant(id: string): void {
    this.store.dispatch(incrementQuantInCart({id}))
  }

  decrementQuant(id: string): void {
    this.store.dispatch(decrementQuantInCart({id}))
  }

  removeCard(id: string): void {
    this.store.dispatch(removeCardFromCart({id}))
  }

  emptyCart(): void {
    this.store.dispatch(emptyCardFromCart())
  }

}
