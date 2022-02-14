import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { AppComponent } from './app.component'
import { CatalogComponent } from './components/catalog/catalog.component'
import { CardComponent } from './components/card/card.component'
import { CartComponent } from './components/cart/cart.component'

import { catalogReducer } from './store/reducers/catalog.reducer'
import { cardReducer } from './store/reducers/card.reducer'
import { cartReducer } from './store/reducers/cart.reducer'

import { CatalogEffects } from './store/effects/catalog.effects'
import { CardEffects } from './store/effects/card.effects';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CollectionComponent } from './components/collection/collection.component'

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CatalogComponent,
    CardComponent,
    NavbarComponent,
    HomeComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      catalog : catalogReducer,
      cart: cartReducer,
      card: cardReducer
    }),
    EffectsModule.forRoot([CatalogEffects, CardEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
