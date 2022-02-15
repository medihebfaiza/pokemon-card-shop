import { Card } from "./card";
import { CartItem } from "./cartItem";
import { Catalog } from "./catalog";

export interface AppState {
    card: Card,
    catalog: Catalog,
    cart: CartItem[],
    collection: Card[]
}