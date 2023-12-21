import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  ViewChildren,
} from '@angular/core';
import { ButtonNavComponent } from '../button-nav/button-nav.component';
import { NgFor } from '@angular/common';
import { SocialMediaNavComponent } from '../social-media-nav/social-media-nav.component';
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
  selector: 'app-sidenav',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <aside
      class="w-32 border-r border-primary-50 h-screen background flex flex-col justify-between"
    >
      <nav class="flex flex-col mt-6 gap-y-8">
        @for (buttonData of buttonsData; track $index) {
        <app-button-nav #button [buttonData]="buttonData" />
        }
      </nav>
      <section class="flex flex-col gap-y-6 items-center justify-center">
        @for (socialMedia of socialMedias; track $index) {
        <app-social-media-nav [socialMedia]="socialMedia" />
        }
        <div class="bg-primary-50 separate w-px h-10"></div>
      </section>
    </aside>
  `,
  imports: [ButtonNavComponent, SocialMediaNavComponent, NgFor],
})
export class SidenavComponent {
  private sectionIds: string[] = ['seb', 'about', 'works'];
  @ViewChildren('button') buttons!: ButtonNavComponent[];
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
    console.log(buttonActive);
    this.buttons.forEach((button) => {
      console.log(button);
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
