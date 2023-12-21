import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

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
  selector: 'app-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="card-container flex flex-col w-72 h-80 rounded-lg overflow-hidden"
    >
      <div class="img-content w-full h-44 overflow-hidden">
        <img [src]="cardData.img" alt="cardData.alt" class="w-max h-max" />
      </div>
      <div
        class="body-content h-36 w-full overflow-hidden flex flex-col justify-end gap-y-2 px-2 relative"
      >
        <div class="text flex flex-col gap-y-2 absolute top-2">
          <h1 class="title text-base font-semibold on-secondary-container-text">
            {{ cardData.title }}
          </h1>
          <p
            class="description text-xs font-normal tracking-wide on-surface-text"
          >
            {{ cardData.description }}
          </p>
        </div>

        <div class="icons-content flex justify-between pb-2">
          <div class="techs flex items-center gap-x-2">
            <div *ngFor="let tech of cardData.techs" class="tech-item w-max">
              <img [src]="ASSET_LINK + tech + '.svg'" class="w-full h-full" />
            </div>
          </div>
          <div
            class="links flex items-center justify-center"
            (mouseenter)="isHover()"
            (mouseleave)="isOut()"
          >
            <button
              [disabled]="!cardData.isActive"
              class="link-item w-max"
              (click)="handleButtonClick()"
              [ngClass]="{ 'cursor-pointer': cardData.isActive }"
            >
              <img
                #img
                src="../../../assets/techs/share-inactive.svg"
                class="w-full h-full"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.scss'],
  imports: [NgFor, NgClass],
})
export class CardComponent {
  @ViewChild('img', { static: true }) img!: ElementRef;
  @Input() cardData!: CardData;
  ASSET_LINK: string = '../../../assets/techs/';

  isHover() {
    if (!this.cardData.isActive) return;
    this.img.nativeElement.src = '../../../assets/techs/share.svg';
  }

  isOut() {
    this.img.nativeElement.src = '../../../assets/techs/share-inactive.svg';
  }

  handleButtonClick() {
    window.open(this.cardData.href, '_blank');
  }
}
