import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

export class Card implements PokemonTCG.Card {
    id: string
    name: string
    supertype: PokemonTCG.Supertype
    subtypes: PokemonTCG.Subtype[]
    set: PokemonTCG.Set
    number: string
    rarity: PokemonTCG.Rarity
    legalities: PokemonTCG.ILegality
    images: PokemonTCG.CardImage
    tcgplayer?: PokemonTCG.TCGPlayer

    constructor(card : PokemonTCG.Card) {
        this.id = card.id
        this.name = card.name
        this.supertype = card.supertype
        this.subtypes = card.subtypes
        this.set = card.set
        this.number = card.number
        this.rarity = card.rarity
        this.legalities = card.legalities
        this.images = card.images
        this.tcgplayer = card.tcgplayer
    }
}

export function getMarketPrice(card : Card): number{
    return card.tcgplayer?.prices?.normal?.market 
        || card.tcgplayer?.prices?.holofoil?.market 
        || card.tcgplayer?.prices?.reverseHolofoil?.market 
        || 0
}