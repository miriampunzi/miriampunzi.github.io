import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-cover',
  templateUrl: './project-cover.component.html',
  styleUrls: ['./project-cover.component.css']
})
export class ProjectCoverComponent {
  @Input() title: any
  @Input() image: any
}
