import { DOCUMENT } from '@angular/common';
import { Component, AfterViewInit, Inject } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements AfterViewInit {
  triggerAnimation!: gsap.core.Timeline;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    register();
    const skillsContainer = this.document.body.querySelector('.skills-container');

    this.triggerAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: skillsContainer,
        start: 'top-=600px ${skillsContainer}',
        end: 'bottom-=500px ${skillsContainer}',
        scrub: true,
      },
    });
    this.scrollAnimations();
  }

  scrollAnimations(): void {
    this.triggerAnimation
    .from('.skills-stack-developer', { opacity: 0, duration: .2, translateY: 80 }, 0)
    .from('.skills-common-section', { opacity: 0, duration: .3, translateY: 80 }, 0)
  }
}
