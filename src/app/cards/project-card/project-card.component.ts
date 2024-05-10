import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() index : any

  projects = [
    {
      title: "Racoomba!",
      description: "Unity Game about 3 racoons who have to scrape items from a house, taking care to avoid the Roomba killers",
      cover: "../../assets/images/project-covers/Cover Racoomba.png",
      link: "racoomba",
      keywords: ["Unity", "C#", "3D Modelling", "Game Design"],
    },

    {
      title: "Concert Randomization",
      description: "Unity application that generates images to train a neural network for semantic segmentation applied to concert photos",
      cover: "../../assets/images/project-covers/Cover ConcertRandomization.jpg",
      link: "concert-randomization",
      keywords: ["Unity", "C#", "Machine Learning", "Semantic Segmentation"],
    },

    {
      title: "Nonverbal Behavior Reinforcement in VR",
      description: "Virtual Reality game to teach nonverbal behavior to Agents.",
      cover: "../../assets/images/project-covers/Cover NonverbalBehaviour.jpg",
      link: "nonverbal-behaviour",
      keywords: ["Unity", "C#", "VR", "Reinforcement Learning", "Gamification"],
    },

    {
      title: "Situated Memories",
      description: "Augmented Reality mobile app that allows people to attach and retrieve digital media onto real objects.",
      cover: "../../assets/images/project-covers/Cover SituatedMemories.jpg",
      link: "situated-memories",
      keywords: ["Unity", "C#", "AR", "Figma", "Mobile App"],
    },

    {
      title: "PopupBreak",
      description: "Desktop app with Virtual Coach to support sedentary workers.",
      cover: "../../assets/images/project-covers/Cover PopupBreak.jpg",
      link: "popup-break",
      keywords: ["Figma", "Java Swing", "Avatar Design"],
    },

    {
      title: "InSignum",
      description: "Interactive system to assist deaf people at home.",
      cover: "../../assets/images/project-covers/Cover InSignum.jpg",
      link: "insignum",
      keywords: ["Android Studio", "Arduino", "User-Centered Design"],
    },

    {
      title: "Espoora - Make your stay more eventful",
      description: "Design and Business analysis of Espoora, a platform for publishing, managing, and joining events in Espoo.",
      cover: "../../assets/images/project-covers/Cover Espoora.png",
      link: "espoora",
      keywords: ["Design", "Business Modelling"],
    },

    {
      title: "Pearly",
      description: "Mobile app where people can play tabletop games and game creators can test their new games.",
      cover: "../../assets/images/project-covers/Cover Pearly.jpg",
      link: "pearly",
      keywords: ["Figma", "Android Studio", "User-Centered Design"],
    },

    {
      title: "Bookflix",
      description: "Application to find and reading books.",
      cover: "../../assets/images/project-covers/Cover Bookflix.jpg",
      link: "bookflix",
      keywords: ["Figma", "User-Centered Design", "Usability Testing"],
    }
  ]
}