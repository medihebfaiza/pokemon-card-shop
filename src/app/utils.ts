import { CartItem } from "./models/cartItem"
import { Card } from "./models/card"
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

/**
 * Calculates the total cost of the cart.
 * @param cart Array of Cart Items
 * @returns SUM(Item price * Item quantity )
 */
export function calculateCartTotal(cart: CartItem[]): number{
    return cart.reduce((total, item) => getCardMarketPrice(item.card)*item.quantity + total, 0)
}

/**
 * Returns Mazrket price of card.
 * @param card Card Object
 * @returns Card Market Price 
 */
export function getCardMarketPrice(card : Card): number{
    return Math.round(card.tcgplayer?.prices?.normal?.market 
        || card.tcgplayer?.prices?.holofoil?.market 
        || card.tcgplayer?.prices?.reverseHolofoil?.market 
        || 0.0 *100)/100
}

/**
 * Checks if a card is already in cart.
 * @param card Card Object to check
 * @param cart Array of Cart Items
 * @returns true if card is in cart, false otherwise
 */
export function cardIsInCart(card: Card, cart: CartItem[]): boolean{
    let exist = cart.reduce((exist, item) => (item.card.id == card.id  || exist), false)
    return exist
}

/**
 * Checks if a card is already in collection.
 * @param card Card Object to check
 * @param collection Array of Cards 
 * @returns true if the card is present in collection, flase otherwise
 */
export function cardIsInCollection(card: Card, collection: Card[]): boolean{
    let exist = collection.reduce((exist, item) => (item.id == card.id  || exist), false)
    return exist
}


/**
 * Checks if card has a "Rare Holo" Rarity.
 * @param card Card Object
 * @returns true if card has a "Rare Holo" Rarity, false otherwise 
 */
export function cardIsRareHolo(card: Card): boolean {
    const rareHolo = [
        PokemonTCG.Rarity.RareHolo,
        PokemonTCG.Rarity.RareHoloEX,
        PokemonTCG.Rarity.RareHoloGX,
        PokemonTCG.Rarity.RareHoloLVX,
        PokemonTCG.Rarity.RareHoloStar,
        PokemonTCG.Rarity.RareHoloV,
        PokemonTCG.Rarity.RareHoloVMAX,
    ]
    return rareHolo.indexOf(card.rarity) >= 0
}