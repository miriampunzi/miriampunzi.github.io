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
        { name: "Angular", percentage: "70%", },
        { name: "SQL", percentage: "80%", },
      ]
    },
    {
      category: "Software",
      content: [
        { name: "Unity", percentage: "90%", },
        { name: "Visual Studio", percentage: "90%", },
        { name: "Android Studio", percentage: "70%", },
        { name: "Figma", percentage: "90%", },
        { name: "Adobe XD", percentage: "80%", },
        { name: "Sketch", percentage: "70%", },
        { name: "Balsamiq", percentage: "70%", },
      ]
    },
  ]
}
