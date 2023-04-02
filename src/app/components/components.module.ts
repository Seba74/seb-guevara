import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
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

    // Material
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
})
export class ComponentsModule {}
