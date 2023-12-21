import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardsGridComponent } from '../../components/cards-grid/cards-grid.component';

@Component({
  selector: 'app-works-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="works-page w-full h-max flex flex-col gap-y-8 relative py-20 mt-32">
      <h1 class="text-5xl font-bold text-primary-500 mb-10">WORKS</h1>
      <div class="content w-full h-max flex justify-center">
        <app-cards-grid class="w-full"></app-cards-grid>
      </div>
    </section>
  `,
  styleUrls: ['./works-page.component.scss'],
  imports: [CardsGridComponent]
})
export class WorksPageComponent {

}
