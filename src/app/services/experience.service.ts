import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experience = [
    {
      company: "Vection Technologies",
      icon: "assets/images/experience-logos/vection.png",
      jobTitle: "UX/UI Designer & Unity Developer",
      url: "https://vection-technologies.com/",
      period: "Aug 2024 - current",
      location: "Bologna, Italy",
      description: "Enhancing UX/UI design and implementing new features in company products - Leading a small team of UX/UI designers"
    },

    {
      company: "TXT e-Tech",
      icon: "assets/images/experience-logos/txt.png",
      jobTitle: "XR Software Engineer",
      url: "https://www.txtgroup.com/",
      period: "Oct 2022 - Jul 2024",
      location: "Milan, Italy",
      description: 
      "Directed the design of a firefighting course in VR - Improved the UX and implemented new features for the Pacelab WEAVR XR training platform - Developed AR/VR/MR training procedures and simulations",
    },

    {
      company: "EventLab",
      icon: "assets/images/experience-logos/eventlab.png",
      jobTitle: "Research Assistant",
      url: "https://www.event-lab.org/",
      period: "Apr 2022 - Sept 2022",
      location: "Barcelona, Spain",
      description: "Developed randomized concert scenarios using Unity and C#, and trained a neural network for semantic segmentation through deep learning techniques - Researched methods to enhance the UX of a rock concert scenario, with a focus on audience plausibility",
    },

    {
      company: "LISN",
      icon: "assets/images/experience-logos/lisn.png",
      jobTitle: "UX Research Intern",
      url: "https://www.lisn.upsaclay.fr/",
      period: "Apr 2021 - Sept 2021",
      location: "Paris, France",
      description: "Completed an internship as part of my master's thesis titled \"Nonverbal Behavior Reinforcement in Virtual Reality\"",
    },

    {
      company: "MadHCILab",
      icon: "assets/images/experience-logos/madhcilab.png",
      jobTitle: "Unity Developer",
      url: "https://madhcilab.es/",
      period: "Feb 2020 - Mar 2020",
      location: "Madrid, Spain",
      description: "Contributed to the development of a VR project for a driving school, simulating car accidents caused by distracted driving",
    },

    {
      company: "ENI Versalis",
      icon: "assets/images/experience-logos/versalis.png",
      jobTitle: "Web Developer",
      url: "https://versalis.eni.com/it-IT/home.html",
      period: "Jun 2015",
      location: "Mantova, Italy",
      description: "Developed a web tool using HTML and JavaScript for value conversion and pipe sizing in an industrial chemical plant",
    },
  ]

  constructor() { }
}
