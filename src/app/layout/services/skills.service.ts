import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

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
