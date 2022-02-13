import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent } from './components/catalog/catalog.component';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'card/:cardId', component: CardComponent},
  { path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
