import { Card } from "./card";

/**
 * CartItem Class used to store the card and the wanted quantity in cart.
 */
export class CartItem {
    card: Card
    quantity: number

    constructor(card: Card, quantity: number = 1) {
        this.card = card
        this.quantity = quantity
    }

    /**
     * Pure function that increments the quantity.
     * @returns a new CartItem with quantity + 1 
     */
    increment(): CartItem {
        return new CartItem(this.card, this.quantity+1)
    }

    /**
     * Pure function that decrements the quantity.
     * @returns if quantity > 1, a new CartItem with quantity + 1, otherwise return same CartItem
     */
    decrement(): CartItem {
        if (this.quantity>1) {
            return new CartItem(this.card, this.quantity-1)
        }
        return this
    }
}