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

  /**
   * Loads a Card via the API with its id.
   * @param id the id of the card to load
   * @returns Observable of Card
   */
  loadCard(id : string): Observable<Card> {
    return from(PokemonTCG.findCardByID(id)) //using from Convert promise to observable
  }

  /**
   * Searches cards via the API based on a keyword.
   * @param keyword keyword used for searching
   * @returns Observable of an Array of Card
   */
  searchCards(keyword : string): Observable<Card[]> {
    let param : PokemonTCG.Parameter= {// using a query to search cards by keyword
      q: 'name:.*'+keyword+'.*'
    }
    return from(PokemonTCG.findCardsByQueries(param)) //using from Convert promise to observable
  }
}
