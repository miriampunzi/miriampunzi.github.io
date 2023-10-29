import { Component, Input } from '@angular/core';
import { ExperienceService } from '../../layout/services/experience.service';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent {
  @Input() index : any

  constructor(private service: ExperienceService) { }

  experience = this.service.experience
}
