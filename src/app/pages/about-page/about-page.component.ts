import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MdButtonComponent } from '../../components/md-button/md-button.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="pt-20 about-page w-full h-screen flex items-center relative">
      <div class="about-content h-max w-full flex justify-between items-center gap-x-32">
        <div class="info-container flex flex-col w-1/2 gap-y-8">
          <h1 class="title font-bold text-5xl text-primary-500"> ABOUT ME </h1>
          <p class="text font-medium text-lg text-primary-100">
            Programmer Analyst & Full Stack Angular Developer with
            over 3 years of experience. Currently focused on developing
            cross-platform applications and Machine Learning.
          </p>
          <app-md-button
            [text]="'Download CV'"
            [href]="href"
            [download]="download"
          ></app-md-button>
        </div>

        <div class="img-container relative">
          <div class="image">
            <img src="../../../assets/bg/me.png" alt="" />
          </div>
          <div class="bg"></div>
        </div>
      </div>
    </main>
  `,
  styleUrls: ['./about-page.component.scss'],
  imports: [MdButtonComponent]
})
export class AboutPageComponent {
  href: string = '../../../assets/cv/seb-guevara.pdf'
  download: string = 'Sebastian_Guevara_CV.pdf'
}
