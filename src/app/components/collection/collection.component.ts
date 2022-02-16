import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Card } from '../../models/card'
import { AppState } from 'src/app/models/app.state'
import { cardIsRareHolo, getCardMarketPrice } from '../../utils'
import { addCardToCart } from '../../store/actions/cart.actions'
import { removeCardFromCollection } from '../../store/actions/collection.actions'

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  cards$: Observable<Card[]>
  getCardMarketPrice = getCardMarketPrice
  cardIsRareHolo = cardIsRareHolo

  constructor(private store: Store<AppState>) { 
    this.cards$ = this.store.select('collection')
  }

  ngOnInit(): void {
  }

  addToCart(card: Card){
    this.store.dispatch(addCardToCart({card}))
  }

  removeFromCollection(id: string){
    this.store.dispatch(removeCardFromCollection({id}))
  }

}
