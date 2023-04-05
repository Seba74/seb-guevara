import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

// import directives
import {
  FadeInDirective,
  FadeInDownDirective,
  FadeInLeftDirective,
} from '../directives/gsap.directive';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

// others
import {register} from 'swiper/element/bundle';

register();

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,

    // add directives
    FadeInDirective,
    FadeInDownDirective,
    FadeInLeftDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    // Material
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {

  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
    matIconRegistry.addSvgIcon('mongodb', domSanitizer.bypassSecurityTrustResourceUrl('./assets/svgs/mongodb.svg'));
    matIconRegistry.addSvgIcon('express', domSanitizer.bypassSecurityTrustResourceUrl('./assets/svgs/express.svg'));
    matIconRegistry.addSvgIcon('angular', domSanitizer.bypassSecurityTrustResourceUrl('./assets/svgs/angular.svg'));
    matIconRegistry.addSvgIcon('node', domSanitizer.bypassSecurityTrustResourceUrl('./assets/svgs/nodejs.svg'));
    matIconRegistry.addSvgIcon('ionic', domSanitizer.bypassSecurityTrustResourceUrl('./assets/svgs/ionic.svg'));
    matIconRegistry.addSvgIcon('sass', domSanitizer.bypassSecurityTrustResourceUrl('./assets/svgs/sass.svg'));
    matIconRegistry.addSvgIcon('git', domSanitizer.bypassSecurityTrustResourceUrl('./assets/svgs/git.svg'));
    matIconRegistry.addSvgIcon('tailwind', domSanitizer.bypassSecurityTrustResourceUrl('./assets/svgs/tailwind.svg'));
    matIconRegistry.addSvgIcon('jira', domSanitizer.bypassSecurityTrustResourceUrl('./assets/svgs/jira.svg'));
    matIconRegistry.addSvgIcon('photoshop', domSanitizer.bypassSecurityTrustResourceUrl('./assets/svgs/photoshop.svg'));
    matIconRegistry.addSvgIcon('premiere', domSanitizer.bypassSecurityTrustResourceUrl('./assets/svgs/premiere.svg'));
    matIconRegistry.addSvgIcon('illustrator', domSanitizer.bypassSecurityTrustResourceUrl('./assets/svgs/illustrator.svg'));
    matIconRegistry.addSvgIcon('figma', domSanitizer.bypassSecurityTrustResourceUrl('./assets/svgs/figma.svg'));
  }
}
