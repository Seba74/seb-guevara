import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  triggerAnimation!: gsap.core.Timeline;

  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {

    this.triggerAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: this.document.body,
        start: 'top top',
        end: '100% 100%',
        scrub: true,
      },
    });
    this.scrollAnimations();
  }

  scrollAnimations(): void {
    this.triggerAnimation.to('.home-img-content', {
      scale: .4,
      opacity: 0.8,
      marginTop: '81px',
    })
    .to('.home-projects', { duration: .1, rotate: 180 }, 0)
    .to('.home-cv', { duration: .1, rotate: 180 }, 0)
    .to('.home-op-animation', { opacity: 0, duration: .1 }, 0);
  }

  downloadPDF() {
    const url = 'assets/cv/cv.pdf';
    this.http.get(url, { responseType: 'blob' }).subscribe((res: any) => {
      const fileURL = URL.createObjectURL(res);
      window.open(fileURL);
    });
  }

}
