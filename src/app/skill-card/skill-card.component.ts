import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent {
  @Input() index : any

  skills = [
    {
      name: "C#",
      percentage: "90%",
    },
    {
      name: "Java",
      percentage: "80%",
    },
    {
      name: "Unity",
      percentage: "90%",
    },
    {
      name: "Figma",
      percentage: "90%",
    },
  ]
}
