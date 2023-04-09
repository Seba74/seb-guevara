import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  triggerAnimation!: gsap.core.Timeline;
  commonUrl: string = '../../../assets/projects/';
  githubUrl: string = 'https://github.com/Seba74/'
  projects: any = [
    {
      title: 'World Gallery Web App',
      description: 'Gallery of images from different countries. It was created using Angular, monogdb, nodejs and express.',
      image: this.commonUrl + '1.png',
      repoUrl: this.githubUrl + 'world-gallery',
      repoAvailable: true,
    },
    {
      title: 'Photography Web App',
      description: 'Album of differents projects of photography. It was created using Angular, monogdb, nodejs and express.',
      image: this.commonUrl + '3.png',
      repoUrl: this.githubUrl + 'photography-app',
      repoAvailable: true,
    },
    {
      title: 'Dayflow App',
      description: 'App where you can promote your business, sell your products and services. It was created using Angular, nodejs, express and firebase',
      image: this.commonUrl + '2.png',
      repoUrl: '',
      repoAvailable: false,
    },
    {
      title: 'iJoda App',
      description: 'Native App where you can promote your local business and events. It was created using Ionic, Angular, nodejs, express and firebase',
      image: this.commonUrl + '4.png',
      repoUrl: '',
      repoAvailable: false,
    },
    {
      title: 'Coffee Shop',
      description: 'E-Commerce where you can buy coffe.',
      image: this.commonUrl + '6.png',
      repoUrl: '',
      repoAvailable: false,
    },
    {
      title: 'My Portfolio',
      description: 'This is actually my personal portfolio, the one you are currently viewing.',
      image: this.commonUrl + '5.png',
      repoUrl: this.githubUrl + 'seb-guevara',
      repoAvailable: true,
    },
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    register();
    const projectsContainer = this.document.body.querySelector('.projects-container');

    this.triggerAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: projectsContainer,
        start: 'top-=600px ${projectsContainer}',
        end: 'top-=-100px ${projectsContainer}',
        scrub: true,
      },
    });
    this.scrollAnimations();
  }

  scrollAnimations(): void {
    this.triggerAnimation
    .from('.project-title-container', { opacity: 0, duration: .3, translateY: 100 }, 0)
    .from('.project-card', { opacity: 0, duration: .3, translateY: 120, delay: .2 }, 0)
  }

}
