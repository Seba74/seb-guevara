import { DOCUMENT } from '@angular/common';
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

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    console.log(this.document.body);

    this.triggerAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: this.document.body,
        markers: true,
        start: 'top top',
        end: '100% 100%',
        scrub: true,
      },
    });
    this.scrollAnimations();
  }

  scrollAnimations(): void {
    this.triggerAnimation.to('.img-content', {
      scale: .3,
      opacity: 0.2,
      marginTop: '95px',
    })
    .to('.projects', { translateY: -300 }, 0)
    .to('.cv', { translateY: -300 }, 0)
    .to('.op-animation', { opacity: 0, duration: .1 }, 0);
  }
}
