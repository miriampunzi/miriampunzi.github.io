import { Component, Input } from '@angular/core';
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent {
  @Input() index : any

  constructor(private service: EducationService) { }

  education = this.service.education
}
