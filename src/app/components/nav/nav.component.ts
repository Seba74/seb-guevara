import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { gsap, Expo } from 'gsap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements AfterViewInit {
  @Input() scrollPosition: number = 0;
  @ViewChild('bar1') bar1!: ElementRef;
  @ViewChild('bar2') bar2!: ElementRef;
  @ViewChild('bar3') bar3!: ElementRef;

  @ViewChild('modalMenu') modalMenu!: ElementRef;

  burgerAnimation!: gsap.core.Timeline;
  modalAnimation!: gsap.core.Timeline;
  spanAnimation!: gsap.core.Timeline;
  naviAnimation!: gsap.core.Timeline;
  socialAnimation!: gsap.core.Timeline;
  isMenuOpen = false;
  @Output() sectionId = new EventEmitter<string>();
  @Input() actualPage = 'home';

  pages = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Stack', id: 'stack' },
    { name: 'Projects', id: 'projects' },
  ];

  social = [
    { name: 'Instagram', url: 'https://www.instagram.com/_sebguevara/' },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sebastian-guevara-1535b7183',
    },
    { name: 'Github', url: 'https://github.com/Seba74' },
  ];

  constructor() {}

  ngAfterViewInit(): void {
    this.burgerAnimation = gsap.timeline({ paused: true });
    this.modalAnimation = gsap.timeline();
    this.spanAnimation = gsap.timeline({ paused: true });
    this.naviAnimation = gsap.timeline({ paused: true });
    this.socialAnimation = gsap.timeline({ paused: true });
    this.burgerAnimation
      .to(this.bar1.nativeElement, {
        attr: { d: 'M8,2 L2,8' },
        x: 1,
        duration: 0.7,
        ease: Expo.easeInOut,
      })
      .to(
        this.bar2.nativeElement,
        {
          autoAlpha: 0,
          duration: 0.7,
          ease: Expo.easeInOut,
        },
        '-=.7'
      )
      .to(
        this.bar3.nativeElement,
        {
          attr: { d: 'M8,8 L2,2' },
          x: 1,
          duration: 0.7,
          ease: Expo.easeInOut,
        },
        '-=.7'
      );

    this.spanAnimation.from('#spanModal', {
      duration: 0.6,
      x: '100%',
      stagger: 0.1,
      ease: Expo.easeInOut,
    });

    this.naviAnimation.from(
      '#navi',
      {
        duration: 1,
        y: '100%',
        stagger: 0.2,
        delay: 0.8,
        ease: Expo.easeInOut,
      },
      '-=.6'
    );

    this.socialAnimation.from(
      '#social',
      {
        duration: 1,
        y: '100%',
        stagger: 0.1,
        opacity: 0,
        delay: 0.9,
        ease: Expo.easeInOut,
      },
      '-=.6'
    );

    this.burgerAnimation.reverse();
  }

  toggleMenu() {
    if (!this.isMenuOpen) {
      this.modalAnimation.from(this.modalMenu.nativeElement, {
        duration: 0.1,
        display: 'none',
        ease: Expo.easeInOut,
        onStart: () => {
          this.spanAnimation.play();
          this.naviAnimation.play();
          this.socialAnimation.play();
          this.burgerAnimation.play();
        },
        onComplete: () => {
          this.isMenuOpen = true;
          this.modalMenu.nativeElement.style.display = 'block';
          setTimeout(() => {
            this.modalMenu.nativeElement.style.backgroundColor = '#191919';
          }, 1000);
        },
      });
    } else {
      this.modalAnimation.to(this.modalMenu.nativeElement, {
        duration: 1.6,
        display: 'block',
        ease: Expo.easeInOut,
        onStart: () => {
          this.burgerAnimation.reverse();
          this.modalMenu.nativeElement.style.backgroundColor = 'transparent';
          this.naviAnimation.reverse();
          this.socialAnimation.reverse();
          setTimeout(() => {
            this.spanAnimation.reverse();
          }, 1000);
        },
        onComplete: () => {
          this.isMenuOpen = false;
          this.modalMenu.nativeElement.style.display = 'none';
        },
      });
    }
  }

  goToSection(sectionId: string): void {
    if (this.actualPage !== sectionId) {
      this.toggleMenu();
    }
    setTimeout(() => {
      this.actualPage = sectionId;
      this.sectionId.emit(sectionId);
    }, 2000);
  }
}
