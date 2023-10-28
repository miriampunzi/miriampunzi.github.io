import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // TODO remove
  education = [
    {
      studyTitle: "Human-Computer Interaction and Design",
    },
    {
      studyTitle: "Human-Computer Interaction and Design",
    },
    {
      studyTitle: "Bachelor Degree in Computer Science",
    },
    {
      studyTitle: "High School diploma in Computer Science",
    },
  ]

  experience = [
    {
      company: "TXT e-Tech",
    },

    {
      company: "EventLab",
    },

    {
      company: "LISN",
    },

    {
      company: "MadHCILab",
    },

    {
      company: "ENI Versalis",
    },
  ]

  skills = [
    {
      name: "C#",
    },
    {
      name: "Java",
    },
    {
      name: "Unity",
    },
    {
      name: "Figma",
    },
  ]
}
