import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  skills = [
    {
      category: "Tecnical",
      content: [
        { name: "Unity", percentage: "90%", },
        { name: "C#", percentage: "90%", },
        { name: "C++", percentage: "70%", },
        { name: "Android Studio", percentage: "70%", },
        { name: "Java", percentage: "80%", },
        { name: "HTML", percentage: "80%", },
        { name: "JavaScript", percentage: "70%", },
        { name: "Angular", percentage: "80%", },
        { name: "SQL", percentage: "80%", },
        { name: "Git", percentage: "90%", },
      ]
    },
    {
      category: "UX Design",
      content: [
        { name: "Figma", percentage: "90%", },
        { name: "Adobe XD", percentage: "80%", },
        { name: "Sketch", percentage: "70%", },
        { name: "Balsamiq", percentage: "70%", },
      ]
    },
  ]
}
