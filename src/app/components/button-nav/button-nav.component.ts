import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  signal,
} from '@angular/core';
import { NgClass } from '@angular/common';

interface ButtonData {
  description: string;
  href: string;
  normal: string;
  hover: string;
  active: string;
  isActive?: boolean;
}

@Component({
  selector: 'app-button-nav',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      [href]="buttonData.href"
      class="item flex flex-col gap-y-2 items-center justify-center"
      [ngClass]="{ active: isActive() }"
      (mouseenter)="onMouseEnter()"
      (mouseleave)="onMouseLeave()"
    >
      <div class="img-container w-6">
        <img #img [src]="buttonData.normal" alt="" class="w-100" />
      </div>
      <h3 class="text-xs text-primary-50">{{ buttonData.description }}</h3>
    </a>
  `,
  styleUrls: ['./button-nav.component.scss'],
  imports: [NgClass],
})
export class ButtonNavComponent implements OnInit {
  @ViewChild('img', { static: true }) img!: ElementRef;
  @Input() buttonData!: ButtonData;
  @Output() activeEvent: EventEmitter<this> = new EventEmitter<this>();
  isActive = signal<boolean>(false);

  ngOnInit(): void {
    if (this.buttonData.isActive) {
      this.isActive.set(true);
      this.img.nativeElement.src = this.buttonData.active;
    }
  }

  onMouseEnter() {
    if (!this.isActive) {
      this.img.nativeElement.src = this.buttonData.hover;
    }
  }

  onMouseLeave() {
    if (!this.isActive) {
      this.img.nativeElement.src = this.buttonData.normal;
    }
  }
}
