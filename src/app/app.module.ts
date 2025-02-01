import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ImmersivePageComponent } from './immersive-page/immersive-page.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProjectCardComponent } from './cards/project-card/project-card.component';
import { EducationCardComponent } from './cards/education-card/education-card.component';
import { ExperienceCardComponent } from './cards/experience-card/experience-card.component';
import { SkillCardComponent } from './cards/skill-card/skill-card.component';
import { PageSectionComponent } from './layout/page-section/page-section.component';
import { HobbyCardComponent } from './cards/hobby-card/hobby-card.component';
import { ConcertRandomizationComponent } from './projects/concert-randomization/concert-randomization.component';
import { NonverbalBehaviourComponent } from './projects/nonverbal-behaviour/nonverbal-behaviour.component';
import { SituatedMemoriesComponent } from './projects/situated-memories/situated-memories.component';
import { PopupBreakComponent } from './projects/popup-break/popup-break.component';
import { InsignumComponent } from './projects/insignum/insignum.component';
import { PearlyComponent } from './projects/pearly/pearly.component';
import { BookflixComponent } from './projects/bookflix/bookflix.component';
import { ProjectCoverComponent } from './layout/project-cover/project-cover.component';
import { InfoSectionComponent } from './layout/info-section/info-section.component';
import { ArrowImagesComponent } from './layout/arrow-images/arrow-images.component';
import { LanguageCardComponent } from './cards/language-card/language-card.component';
import { RacoombaComponent } from './projects/racoomba/racoomba.component';
import { EspooraComponent } from './projects/espoora/espoora.component';
import { BackgroundComponent } from './layout/background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ImmersivePageComponent,
    NavbarComponent,
    ProjectCardComponent,
    EducationCardComponent,
    ExperienceCardComponent,
    SkillCardComponent,
    PageSectionComponent,
    HobbyCardComponent,
    ConcertRandomizationComponent,
    NonverbalBehaviourComponent,
    SituatedMemoriesComponent,
    PopupBreakComponent,
    InsignumComponent,
    PearlyComponent,
    BookflixComponent,
    ProjectCoverComponent,
    InfoSectionComponent,
    ArrowImagesComponent,
    LanguageCardComponent,
    RacoombaComponent,
    EspooraComponent,
    BackgroundComponent,
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
