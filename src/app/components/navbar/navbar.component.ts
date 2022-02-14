import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppState } from '../../models/app.state'
import { CartItem } from '../../models/cartItem'
import { calculateCartTotal } from '../../utils'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  cart$: Observable<CartItem[]>
  total: number = 0
  count: number = 0

  constructor(private store: Store<AppState>) {
    this.cart$ = this.store.select('cart')
    this.cart$.subscribe(cart => this.total = calculateCartTotal(cart))
    this.cart$.subscribe(cart => this.count = cart.length)
  }

  ngOnInit(): void {
  }

}
