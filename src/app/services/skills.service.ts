import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  skills = [
    {
      category: "Technology",
      content: [
        { name: "C#", percentage: "90%", },
        { name: "C++", percentage: "70%", },
        { name: "Java", percentage: "80%", },
        { name: "HTML", percentage: "80%", },
        { name: "CSS", percentage: "80%", },
        { name: "Angular", percentage: "80%", },
        { name: "A-Frame", percentage: "80%", },
        { name: "JavaScript", percentage: "60%", },
        { name: "SQL", percentage: "80%", },
        { name: "PHP", percentage: "70%", },
        { name: "Python", percentage: "30%", },
        { name: "Arduino", percentage: "30%", },
      ]
    },
    {
      category: "Software",
      content: [
        { name: "Unity", percentage: "90%", },
        { name: "Visual Studio", percentage: "90%", },
        { name: "Android Studio", percentage: "70%", },
        { name: "PyTorch", percentage: "20%", },
        { name: "Matlab", percentage: "20%", },
        { name: "Adobe Premiere", percentage: "40%", },
        { name: "Microsoft Office", percentage: "40%", },
        { name: "Gimp", percentage: "40%", },
        { name: "Git", percentage: "90%", },
      ]
    },
    {
      category: "Design",
      content: [
        { name: "Figma", percentage: "90%", },
        { name: "Adobe XD", percentage: "80%", },
        { name: "Sketch", percentage: "70%", },
        { name: "Balsamiq", percentage: "70%", },
        { name: "Canva", percentage: "70%", },
      ]
    },
    {
      category: "XR Technology",
      content: [
        { name: "Oculus Quest", percentage: "90%", },
        { name: "VIVE XR", percentage: "80%", },
        { name: "HTC VIVE", percentage: "70%", },
        { name: "Hololens", percentage: "70%", },
        { name: "Magic Leap", percentage: "70%", },
        { name: "WEART haptic sensors", percentage: "70%", },
        { name: "Motion capture suit", percentage: "70%", },
        { name: "Tracking sensors", percentage: "70%", },
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
        { name: "Innovation Development & Management", percentage: "80%", },
        { name: "Business Modelling", percentage: "90%", },
        { name: "Pitching", percentage: "70%", },
      ]
    }
  ]
}
