import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ButtonNavComponent } from '../../components/button-nav/button-nav.component';
import { SocialMediaNavComponent } from '../../components/social-media-nav/social-media-nav.component';
import { buttonsData, socialMedia } from '../../../const';

interface ButtonData {
  description: string;
  href: string;
  normal: string;
  hover: string;
  active: string;
  isActive?: boolean;
}

interface SocialMedia {
  icon: string;
  href: string;
}

@Component({
  selector: 'app-mobile-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <div>
        <app-button-nav
          *ngFor="let buttonData of buttonsData"
          #button
          [buttonData]="buttonData"
          (activeEvent)="activeButton($event)"
        />
      </div>
      <section class="media-section flex items-center   justify-center gap-x-8">
        @for (socialMedia of socialMedias; track $index) {
        <app-social-media-nav [socialMedia]="socialMedia" />
        }
        <div class="separate w-px h-14"></div>
      </section>
      <ng-content></ng-content>
    </main>
  `,
  styleUrls: ['./mobile-layout.component.scss'],
  imports: [NgClass, SocialMediaNavComponent, ButtonNavComponent],
})
export class MobileLayoutComponent {
  private sectionIds: string[] = ['seb', 'about', 'works'];
  @ViewChildren('button') buttons!: ButtonNavComponent[];
  @ViewChild('nav') nav!: any;
  buttonsData: ButtonData[] = buttonsData;
  socialMedias: SocialMedia[] = socialMedia;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentSection = this.determineActiveSection();
    this.toggleActiveClass(currentSection);
  }

  private determineActiveSection(): string {
    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop || 0;

    for (let i = 0; i < this.sectionIds.length; i++) {
      const section = document.getElementById(this.sectionIds[i]);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          return this.sectionIds[i];
        }
      }
    }
    return this.sectionIds[0];
  }

  private toggleActiveClass(activeSectionId: string): void {
    this.buttons.forEach((button) => {
      if (button.buttonData.href === `#${activeSectionId}`) {
        this.activeButton(button);
      }
    });
  }

  activeButton(buttonActive: ButtonNavComponent) {
    this.buttons.forEach((button) => {
      if (button !== buttonActive) {
        button.isActive.set(false);
        button.img.nativeElement.src = button.buttonData.normal;
      } else {
        button.isActive.set(true);
        button.img.nativeElement.src = button.buttonData.active;
      }
    });
  }
}
