import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
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
import { SkillsComponent } from './skills/skills.component';

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
})
export class ComponentsModule {

  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
