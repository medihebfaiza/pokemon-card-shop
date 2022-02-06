import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'card/:cardId', component: CardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
