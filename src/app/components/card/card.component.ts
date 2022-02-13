import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { AppState } from 'src/app/models/app.state'
import { loadCard } from '../../store/actions/card.actions'
import { Card } from 'src/app/models/card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  card$ : Observable<Card> 

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
  }

  ngOnInit(): void {
  }

}
