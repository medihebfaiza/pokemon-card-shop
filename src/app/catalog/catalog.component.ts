import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  cards: Card[] = [
    {
      id : '1',
      name : "Pikachu",
      supertype: "Bzz Bzz",
      images: "https://images.pokemontcg.io/smp/SM112_hires.png",
      cardmarket: "Lalala",
    },
    {
      id : '1',
      name : "Pikachu",
      supertype: "Bzz Bzz",
      images: "https://images.pokemontcg.io/smp/SM112_hires.png",
      cardmarket: "Lalala",
    },
    {
      id : '1',
      name : "Pikachu",
      supertype: "Bzz Bzz",
      images: "https://images.pokemontcg.io/smp/SM112_hires.png",
      cardmarket: "Lalala",
    },
    {
      id : '1',
      name : "Pikachu",
      supertype: "Bzz Bzz",
      images: "https://images.pokemontcg.io/smp/SM112_hires.png",
      cardmarket: "Lalala",
    },
    {
      id : '1',
      name : "Pikachu",
      supertype: "Bzz Bzz",
      images: "https://images.pokemontcg.io/smp/SM112_hires.png",
      cardmarket: "Lalala",
    },
  ]

  addToFavorites(id: string)  {}

  addToCart(id: string)  {}

  constructor() { }

  ngOnInit(): void {
  }

}
