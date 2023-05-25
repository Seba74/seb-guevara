import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'seb-guevara';
  scrollPosition: number = 0;
  actualSection: string = 'home';

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    this.scrollPosition =
      window.pageYOffset |
      document.body.scrollTop |
      document.documentElement.scrollTop |
      0;

    if (this.scrollPosition < 500) {
      this.actualSection = 'home';
    }
    if (this.scrollPosition > 500 && this.scrollPosition <= 1000) {
      this.actualSection = 'about';
    }
    if (this.scrollPosition > 1000 && this.scrollPosition <= 1650) {
      this.actualSection = 'stack';
    }
    if (this.scrollPosition > 1650) {
      this.actualSection = 'projects';
    }
  }

  scrollToSection(sectionId: any): void {
    const element = this.el.nativeElement.querySelector('#' + sectionId);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
