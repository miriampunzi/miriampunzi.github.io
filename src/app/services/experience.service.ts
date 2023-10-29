import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experience = [
    {
      company: "TXT e-Tech",
      jobTitle: "Software Engineer",
      url: "https://www.txtgroup.com/",
      period: "Oct 2022 - current",
      location: "Milan, Italy",
      description: "I am creating Augmented and Virtual Reality training procedures and simulations for the Aerospace & Defense division.",
    },

    {
      company: "EventLab",
      jobTitle: "Research Assistant in VR",
      url: "https://www.event-lab.org/",
      period: "Apr 2022 - Sept 2022",
      location: "Barcelona, Spain",
      description: "I created by C# randomized concert scenarios with Unity & Visual Studio, and trained a neural network for Semantic Segmentation through Deep Learning",
    },

    {
      company: "LISN",
      jobTitle: "UX Researcher & VR Programmer",
      url: "https://www.lisn.upsaclay.fr/",
      period: "Apr 2021 - Sept 2021",
      location: "Paris, France",
      description: "I did the internship for my master thesis \"Nonverbal Behavior Reinforcement in Virtual Reality\"",
    },

    {
      company: "MadHCILab",
      jobTitle: "VR Programmer",
      url: "https://madhcilab.es/",
      period: "Feb 2020 - Mar 2020",
      location: "Madrid, Spain",
      description: "I participated in the development of a project for a driving school that simulates car accidents in VR in the context of distracted driving using Unity & Visual Studio",
    },

    {
      company: "ENI Versalis",
      jobTitle: "Web Developer",
      url: "https://versalis.eni.com/it-IT/home.html",
      period: "Jun 2015",
      location: "Mantova, Italy",
      description: "I programmed a web tool in HTML and Javascript for value conversion and pipe sizing for an industrial chemical plant",
    },
  ]

  constructor() { }
}
