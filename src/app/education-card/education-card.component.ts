import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent {
  @Input() index : any

  education = [
    {
      studyTitle: "Human-Computer Interaction and Design",
      university: "Université Paris-Saclay",
      years: "Sep 2020 - Sep 2021",
      graduationPhoto: "assets/images/graduation-photos/ups.jpg",
    },
    {
      studyTitle: "Human-Computer Interaction and Design",
      university: "Universidad Politécnica de Madrid",
      years: "Sep 2019 - Jun 2020",
      graduationPhoto: "assets/images/graduation-photos/upm.jpg",
    },
    {
      studyTitle: "Bachelor Degree in Computer Science",
      university: "Università degli studi di Trento",
      years: "Sep 2016 - Jun 2019",
      graduationPhoto: "assets/images/graduation-photos/unitn.jpg",
    },
    {
      studyTitle: "High School diploma in Computer Science",
      university: "ITIS E. Fermi di Mantova",
      years: "Sep 2011 - Jun 2016",
      graduationPhoto: "assets/images/graduation-photos/itis.jpg",
    },
  ]
}
