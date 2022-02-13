import { createAction, props } from '@ngrx/store'
import { Card } from '../../models/card'

export const loadCatalog = createAction('[Catalog Component] Load Catalog', props<{keyword : string}>())
export const catalogLoaded = createAction('[Catalog Component] Catalog Loaded Success', props<{cards : Card[]}>())