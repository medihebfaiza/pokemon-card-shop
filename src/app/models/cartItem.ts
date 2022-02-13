import { Card } from "./card";

export class CartItem {
    card: Card
    quantity: number

    constructor(card: Card, quantity: number = 1) {
        this.card = card
        this.quantity = quantity
    }

    increment(): CartItem {
        return new CartItem(this.card, this.quantity+1)
    }

    decrement(): CartItem {
        if (this.quantity>1) {
            return new CartItem(this.card, this.quantity-1)
        }
        return this
    }
}