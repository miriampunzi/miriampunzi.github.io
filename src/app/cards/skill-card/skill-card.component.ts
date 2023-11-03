import { Component, Input } from '@angular/core';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent {
  @Input() i : any

  constructor(private service: SkillsService) { }

  skills = this.service.skills
}
