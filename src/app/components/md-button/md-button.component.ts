import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-md-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="rounded-xl bg-gradient-to-r from-primary-600 to-primary-800 text-primary-100 p-3"
      [href]="href"
      [download]="download"
    >
      {{ text }}
    </a>
  `,
  styleUrls: ['./md-button.component.scss'],
})
export class MdButtonComponent {
  @Input() text: string = '';
  @Input() href: string = '';
  @Input() download: string = '';
}
