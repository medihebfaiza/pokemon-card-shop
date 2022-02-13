import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, exhaustMap, catchError } from 'rxjs/operators'
import { EMPTY  } from 'rxjs'
import { DataService } from '../../service/data.service'
import { loadCard } from '../actions/card.actions'

@Injectable()
export class CardEffects {
	
	constructor(
		private actions$: Actions,
		private dataService: DataService
	) {}

	loadCatalog$ = createEffect(() => this.actions$.pipe(
		ofType(loadCard),
		exhaustMap(action  => this.dataService.loadCard(action.id)
			.pipe(
				map(card => ({type: '[Card Component] Card Loaded Success', card: card})),
				catchError(error => EMPTY)
			)
		) 
	))
}