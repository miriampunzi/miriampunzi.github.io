import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ImmersivePageComponent } from './immersive-page/immersive-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ResumeComponent } from './resume/resume.component';
import { EducationCardComponent } from './education-card/education-card.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { SkillCardComponent } from './skill-card/skill-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    ImmersivePageComponent,
    NavbarComponent,
    ProjectCardComponent,
    ResumeComponent,
    EducationCardComponent,
    ExperienceCardComponent,
    SkillCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
