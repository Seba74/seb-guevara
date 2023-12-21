import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-desktop-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="layout-container mx-20">
      <div class="content w-full flex">
        <app-sidenav class="fixed left-0"></app-sidenav>
        <div class="pages-content ml-32 w-full">
          <ng-content></ng-content>
        </div>
      </div>
    </main>
  `,
  styleUrls: ['./desktop-layout.component.scss'],
  imports: [SidenavComponent],
})
export class DesktopLayoutComponent {}
