import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable, reduce } from 'rxjs'
import { Card, getMarketPrice } from '../../models/card'
import { AppState } from 'src/app/models/app.state'
import { incrementQuantInCart, decrementQuantInCart, removeCardFromCart } from 'src/app/store/actions/cart.actions'
import { CartItem } from 'src/app/models/cartItem'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart$: Observable<CartItem[]>

  getMarketPrice = getMarketPrice

  constructor(private store: Store<AppState>) {
    this.cart$ = store.select('cart')
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

}
