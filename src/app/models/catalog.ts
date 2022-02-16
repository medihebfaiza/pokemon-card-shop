import { Card } from './card';

/**
 * Catalog class.
 * Has an Array of Card and a boolean to tell when data is being fetched.
 */
export class Catalog {
    loading: boolean = false
    cards: Card[] = []
}