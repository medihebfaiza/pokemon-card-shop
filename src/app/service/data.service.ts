import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { Card } from '../models/card'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private store: Store<{card : Card}>) { }

  loadCard(id : string): Observable<Card> {
    //Convert promise to observable
    return from(PokemonTCG.findCardByID(id))
  }

  searchCards(keyword : string): Observable<Card[]> {
    let param : PokemonTCG.Parameter= {
      q: 'name:.*'+keyword+'.*'
    }
    //Convert promise to observable
    return from(PokemonTCG.findCardsByQueries(param))
  }
}
