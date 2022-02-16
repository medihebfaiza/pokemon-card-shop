import { Card } from "./card";
import { CartItem } from "./cartItem";
import { Catalog } from "./catalog";

/**
 * The General Sate Interface.
 * Avoids using any when passing the store to components.
 */
export interface AppState {
    card: Card,
    catalog: Catalog,
    cart: CartItem[],
    collection: Card[]
}