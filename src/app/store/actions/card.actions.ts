import { createAction, props } from '@ngrx/store';
import { Card } from '../../models/card';

export const loadCard = createAction('[Card Component] Load Card', props<{id : string}>())
export const cardLoaded = createAction('[Card Component] Card Loaded Success', props<{card : Card}>())