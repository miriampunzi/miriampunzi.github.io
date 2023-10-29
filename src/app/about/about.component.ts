import { Component } from '@angular/core';
import { ExperienceService } from '../layout/services/experience.service';
import { EducationService } from '../layout/services/education.service';
import { SkillsService } from '../layout/services/skills.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private experienceService: ExperienceService, private educationService: EducationService, private skillsService: SkillsService) { }

  experience = this.experienceService.experience
  education = this.educationService.education
  skills = this.skillsService.skills
}
