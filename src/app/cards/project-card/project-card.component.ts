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
      title: "Concert Randomization",
      description: "Unity application that generates images to train a neural network for semantic segmentation applied to concert photos",
      cover: "assets/images/project-covers/Cover ConcertRandomization.jpg"
    },

    {
      title: "Nonverbal Behavior Reinforcement in VR",
      description: "Virtual Reality game to teach nonverbal behavior to Agents.",
      cover: "assets/images/project-covers/Cover NonverbalBehaviour.jpg"
    },

    {
      title: "Situated Memories",
      description: "Unity application that generates images to train a neural network for semantic segmentation applied to concert photos",
      cover: "assets/images/project-covers/Cover SituatedMemories.jpg"
    },

    {
      title: "PopupBreak",
      description: "Desktop app with Virtual Coach to support sedentary workers.",
      cover: "assets/images/project-covers/Cover PopupBreak.jpg"
    },

    {
      title: "InSignum",
      description: "Interactive system to assist deaf people at home.",
      cover: "assets/images/project-covers/Cover InSignum.jpg"
    },

    {
      title: "Pearly",
      description: "Mobile app where people can play tabletop games and game creators can test their new games.",
      cover: "assets/images/project-covers/Cover Pearly.jpg"
    },

    {
      title: "Bookflix",
      description: "Application to find and reading books.",
      cover: "assets/images/project-covers/Cover Bookflix.jpg"
    }
  ]
}