import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.css']
})
export class PageSectionComponent {
  @Input() sectionTitle : any
  @Input() sectionSubtitle : any
  @Input() sectionSubsubtitle : any
}
