import { Component } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { EducationService } from '../services/education.service';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  coverProjects = [
    'assets/images/Home/Cover ConcertRandomization.jpg',
    'assets/images/Home/Cover NonverbalBehaviour.jpg',
    'assets/images/Home/Cover SituatedMemories.jpg',
    'assets/images/Home/Cover InSignum.jpg',
    'assets/images/Home/Cover PopupBreak.jpg',
    'assets/images/Home/Cover Pearly.jpg',
    'assets/images/Home/Cover Bookflix.jpg',
    'assets/images/Home/Cover Racoomba.png',
    'assets/images/Home/Cover Espoora.png',
  ]

  constructor(private experienceService: ExperienceService, private educationService: EducationService, private skillsService: SkillsService) { }

  experience = this.experienceService.experience
  education = this.educationService.education
  skills = this.skillsService.skills
}
