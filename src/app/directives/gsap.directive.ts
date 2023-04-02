import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { gsap, Expo } from 'gsap';

@Directive({
  selector: '[FadeInLeft]',
})
export class FadeInLeftDirective implements OnInit {

  @Input() delay: number = 0;
  @Input() positionX: number = 0;
  @Input() positionY: number = 0;

  constructor(private element: ElementRef) {}
  ngOnInit(): void {
    gsap.from(this.element.nativeElement, {
      opacity: 0,
      x: this.positionX,
      y: this.positionY,
      duration: 1.5,
      delay: this.delay,
      ease: Expo.easeInOut,
    });
  }
}

@Directive({
  selector: '[FadeInDown]',
})
export class FadeInDownDirective {
  constructor(private element: ElementRef) {
    gsap.from(this.element.nativeElement, {
      opacity: 0,
      y: 150,
      duration: 1.5,
      ease: Expo.easeInOut,
    });
  }
}

@Directive({
  selector: '[FadeIn]',
})
export class FadeInDirective implements OnInit {
  @Input() delay: number = 0;
  constructor(private element: ElementRef) {}

  ngOnInit() {
    gsap.from(this.element.nativeElement, {
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
      delay: this.delay,
    });
  }
}