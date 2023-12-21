import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

interface SocialMedia {
  icon: string;
  href: string;
}

@Component({
  selector: 'app-social-media-nav',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      [href]="socialMedia.href"
      class="img-container flex flex-col w-7"
      target="_blank"
    >
      <img [src]="socialMedia.icon" alt="" class="w-100" />
    </a>
  `,
})
export class SocialMediaNavComponent {
  @Input() socialMedia!: SocialMedia;
}
