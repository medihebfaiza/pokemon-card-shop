import { CartItem } from "./models/cartItem"
import { Card } from "./models/card"


export function calculateCartTotal(cart: CartItem[]): number{
    return cart.reduce((total, item) => getCardMarketPrice(item.card)*item.quantity + total, 0)
}

export function getCardMarketPrice(card : Card): number{
    return card.tcgplayer?.prices?.normal?.market 
        || card.tcgplayer?.prices?.holofoil?.market 
        || card.tcgplayer?.prices?.reverseHolofoil?.market 
        || 0
}

export function cardIsInCart(card: Card, cart: CartItem[]): boolean{
    let exist = cart.reduce((exist, item) => (item.card.id == card.id  || exist), false)
    return exist
}

export function cardIsInCollection(card: Card, cart: Card[]): boolean{
    let exist = cart.reduce((exist, item) => (item.id == card.id  || exist), false)
    return exist
}