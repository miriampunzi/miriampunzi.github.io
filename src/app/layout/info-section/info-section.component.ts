import { AfterContentInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ProjectInfoService } from 'src/app/services/project-info.service';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css']
})
export class InfoSectionComponent implements OnInit {
  @Input() projectName: any

  project : any

  constructor(private service:ProjectInfoService) { }

  ngOnInit(): void {
    this.project = this.service.projects.filter((project) => project.name == this.projectName)
  }
}
