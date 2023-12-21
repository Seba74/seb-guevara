import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';
import { cardsData } from '../../../const';

interface CardData {
  title: string;
  description: string;
  href: string;
  img: string;
  alt: string;
  techs: string[];
  isActive?: boolean;
}

@Component({
  selector: 'app-cards-grid',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cards-container w-full">
      @for (card of cards; track $index) {
      <app-card [cardData]="card"></app-card>
      }
    </div>
  `,
  styleUrls: ['./cards-grid.component.scss'],
  imports: [CardComponent, NgFor],
})
export class CardsGridComponent {
  cards: CardData[] = cardsData;
}
