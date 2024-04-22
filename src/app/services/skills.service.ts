import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  skills = [
    {
      category: "Programming",
      content: [
        { name: "C#", percentage: "90%", },
        { name: "C++", percentage: "70%", },
        { name: "Java", percentage: "80%", },
        { name: "HTML", percentage: "80%", },
        { name: "CSS", percentage: "80%", },
        { name: "JavaScript", percentage: "60%", },
        { name: "SQL", percentage: "80%", },
        { name: "PHP", percentage: "70%", },
        { name: "Python", percentage: "30%", },
      ]
    },
    {
      category: "Software",
      content: [
        { name: "Unity", percentage: "90%", },
        { name: "Visual Studio", percentage: "90%", },
        { name: "Android Studio", percentage: "70%", },
        { name: "Matlab", percentage: "20%", },
        { name: "Adobe Premiere", percentage: "40%", },
        { name: "Office", percentage: "40%", },
      ]
    },
    {
      category: "Design",
      content: [
        { name: "Figma", percentage: "90%", },
        { name: "Adobe XD", percentage: "80%", },
        { name: "Sketch", percentage: "70%", },
        { name: "Balsamiq", percentage: "70%", },
      ]
    },
    {
      category: "Collaboration",
      content: [
        { name: "Git", percentage: "90%", },
        { name: "Glitch", percentage: "80%", },
        { name: "Miro", percentage: "70%", },
      ]
    },
    {
      category: "Research",
      content: [
        { name: "Usability Testing", percentage: "90%", },
        { name: "Design Thinking", percentage: "80%", },
        { name: "Accessibility", percentage: "70%", },
        { name: "Personas", percentage: "70%", },
        { name: "Interviews", percentage: "70%", },
      ]
    },
    {
      category: "Business",
      content: [
        { name: "Business Modelling", percentage: "90%", },
        { name: "Innovation Development", percentage: "80%", },
        { name: "Pitching", percentage: "70%", },
      ]
    }
  ]
}
