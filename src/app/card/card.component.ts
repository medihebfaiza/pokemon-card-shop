import { Component, OnInit } from '@angular/core';

export interface Card {
  id: string;
  name: string;
  supertype: string;
  images: string;
  cardmarket: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  }

}
