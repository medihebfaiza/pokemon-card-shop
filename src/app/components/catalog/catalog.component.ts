import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppState } from 'src/app/models/app.state'
import { Card } from '../../models/card'
import { loadCatalog } from '../../store/actions/catalog.actions'
import { addCardToCart } from '../../store/actions/cart.actions'
import { cardsSelector, loadingSelector } from '../../store/selectors/catalog.selector'
import { getCardMarketPrice } from '../../utils'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  loading$: Observable<boolean>
  cards$: Observable<Card[]>
  keyword: string = ''
  getCardMarketPrice = getCardMarketPrice

  
  constructor(private store: Store<AppState>) {
    this.loading$ = store.pipe(select(loadingSelector))
    this.cards$ = store.pipe(select(cardsSelector))
  }
  
  ngOnInit(): void {}
  
  onKey(event: any) {
    this.keyword = event.target.value
  }
  
  search(): void {
    if (this.keyword.length){
      this.store.dispatch(loadCatalog({keyword: this.keyword}))
    }
  }

  addToFavorites(id: string)  {}

  addToCart(card: Card){
    this.store.dispatch(addCardToCart({card}))
  }
}
