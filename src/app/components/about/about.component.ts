import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
  triggerAnimation!: gsap.core.Timeline;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    const aboutContainer = this.document.body.querySelector('.about-container');

    this.triggerAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: aboutContainer,
        start: 'top-=600px ${aboutContainer}',
        end: 'bottom-=100px ${aboutContainer}',
        scrub: true,
      },
    });
    this.scrollAnimations();
  }

  scrollAnimations(): void {
    this.triggerAnimation.to('.about-text-bg', {
      scale: 2.8,
      opacity: 0.2,
      duration: 1
    })
    .from('.about-title-container', { opacity: 0, duration: .3, translateY: 120 }, 0)
    .from('.about-text-container', { opacity: 0, duration: .5, translateY: 80 }, 0)
    .from('.about-social', { opacity: 0, duration: .6, translateY: 70 }, 0);
  }
}
