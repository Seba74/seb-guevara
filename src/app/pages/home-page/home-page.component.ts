import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UpperCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="home-page w-full h-screen flex items-center justify-center relative">
      <div class="bg"></div>
      <div class="title-container flex flex-col items-center gap-y-4">
        <h1 class="text-7xl font-bold tracking-wide text-primary-500">{{ title | uppercase }}</h1>
        <h2 class="text-3xl font-light text-primary-200">{{ subtitle }}</h2>
      </div>
    </main>
  `,
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  title: string = 'Sebastian Guevara';
  subtitle: string = 'Programmer Analyst & Full Stack Developer';
}
