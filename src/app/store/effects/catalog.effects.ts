import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, exhaustMap, catchError } from 'rxjs/operators'
import { EMPTY  } from 'rxjs'
import { DataService } from '../../service/data.service'
import { loadCatalog } from '../actions/catalog.actions'

@Injectable()
export class CatalogEffects {
	
	constructor(
		private actions$: Actions,
		private dataService: DataService
	) {}

	loadCatalog$ = createEffect(() => this.actions$.pipe(
		ofType(loadCatalog),
		exhaustMap(action  => this.dataService.searchCards(action.keyword)
			.pipe(
				map(cards => {console.log(cards);return ({type: '[Catalog Component] Catalog Loaded Success', cards: cards})}),
				catchError(error => EMPTY)
			)
		) 
	))
}