import { createSelector } from "@ngrx/store"
import { AppState } from "src/app/models/app.state"
import { Card } from '../../models/card'
import { Catalog } from '../../models/catalog'

export const cardsSelector = createSelector(
    (state: AppState) => state.catalog,
    (catalog: Catalog) => catalog.cards,
)

export const loadingSelector = createSelector(
    (state: AppState) => state.catalog,
    (catalog: Catalog) => catalog.loading,
)