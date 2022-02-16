import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { AppState } from 'src/app/models/app.state'
import { loadCard } from '../../store/actions/card.actions'
import { addCardToCart } from '../../store/actions/cart.actions'
import { Card } from 'src/app/models/card'
import { getCardMarketPrice, cardIsRareHolo } from '../../utils'
import { addCardToCollection } from 'src/app/store/actions/collection.actions'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  card$ : Observable<Card> 
  price : number = 0
  isRareHolo: boolean = false

  constructor(private store: Store<AppState>, router: ActivatedRoute) { 
    router.paramMap.subscribe(
      params => {
        let cardId = params.get('cardId')
        if (cardId) {
          this.store.dispatch(loadCard({id: cardId})) 
        }
      }
    )

    this.card$ = store.select('card')
    this.card$.subscribe(card => {
      this.price = getCardMarketPrice(card)
      this.isRareHolo = cardIsRareHolo(card)
    })
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.card$.subscribe(card => this.store.dispatch(addCardToCart({card})))
  }

  addToCollection() {
    this.card$.subscribe(card => this.store.dispatch(addCardToCollection({card})))
  }

}
