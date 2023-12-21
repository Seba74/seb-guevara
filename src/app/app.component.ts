import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  afterRender,
  effect,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { getWindow } from 'ssr-window';
import { DesktopLayoutComponent } from './layouts/desktop-layout/desktop-layout.component';
import { MobileLayoutComponent } from './layouts/mobile-layout/mobile-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { WorksPageComponent } from './pages/works-page/works-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    DesktopLayoutComponent,
    MobileLayoutComponent,
    HomePageComponent,
    AboutPageComponent,
    WorksPageComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = 'seb-guevara';
  public mobile = signal<boolean>(false);

  constructor() {
    afterRender(() => {
      this.checkIfMobile();
      getWindow().addEventListener('resize', () => this.checkIfMobile());
    });
  }

  checkIfMobile() {
    const mediaQuery = getWindow().matchMedia('(max-width: 750px)');
    this.mobile.set(mediaQuery.matches);
    console.log(this.mobile);
  }
}
