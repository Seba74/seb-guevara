import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'seb-guevara';
  scrollPosition: number = 0;

  // hostlistener scrolling
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    this.scrollPosition = window.pageYOffset | document.body.scrollTop | document.documentElement.scrollTop | 0;
  }

}
