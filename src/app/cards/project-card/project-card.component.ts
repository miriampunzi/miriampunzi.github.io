import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})

export class ProjectCardComponent {
  @Input() index: any;
  showImage: boolean = true;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLIFrameElement>;
  @ViewChild('imageCover') imageCover!: ElementRef<HTMLIFrameElement>;

  projects = [
    {
      title: 'Racoomba!',
      description:
        'Development of a Unity game about 3 racoons who have to scrape items from a house, taking care to avoid the Roomba killers',
      cover: "../../assets/images/project-covers/Cover Racoomba.png",
      video: this.getSafeVideoUrl('https://www.youtube.com/embed/3uZRMXiv-Rw?rel=0'),
      link: 'racoomba',
      keywords: ['Unity', 'C#', '3D Modelling', 'Game Design'],
    },

    {
      title: 'Concert Randomization',
      description:
        'Development of a Unity application that generates images to train a neural network for semantic segmentation applied to concert photos',
      cover: "../../assets/images/project-covers/ConcertRandomization.gif",
      link: 'concert-randomization',
      keywords: ['Unity', 'C#', 'Machine Learning', 'Semantic Segmentation'],
    },

    {
      title: 'Nonverbal Behavior Reinforcement in VR',
      description:
        'Master Thesis: UX study and demo development of a VR game to teach nonverbal behavior to virtual agents through Reinforcement Learning',
      cover: "../../assets/images/project-covers/Cover NonverbalBehaviour.gif",
      link: 'nonverbal-behaviour',
      keywords: ['Unity', 'C#', 'VR', 'Reinforcement Learning', 'Gamification'],
    },

    {
      title: 'Situated Memories',
      description:
        'UX study and demo development of an AR app to attach and retrieve digital media onto real objects',
      cover: "../../assets/images/project-covers/Cover SituatedMemories.jpg",
      video: this.getSafeVideoUrl(
        'https://www.youtube.com/embed/DLVnXWCYp-4?rel=0'
      ),
      link: 'situated-memories',
      keywords: ['Unity', 'C#', 'AR', 'Figma', 'Mobile App'],
    },

    {
      title: 'PopupBreak',
      description:
        'UX study and demo development of a desktop app with Virtual Coach to support sedentary workers',
      cover: "../../assets/images/project-covers/Cover PopupBreak.jpg",
      video: this.getSafeVideoUrl(
        'https://www.youtube.com/embed/yFgZMnE5bU8?rel=0'
      ),
      link: 'popup-break',
      keywords: ['Figma', 'Java Swing', 'Avatar Design'],
    },

    {
      title: 'InSignum',
      description:
        'UX study and demo development of an interactive system to assist deaf people at home',
      cover: "../../assets/images/project-covers/Cover InSignum.jpg",
      video: this.getSafeVideoUrl(
        'https://www.youtube.com/embed/iKftsyKDiDo?rel=0'
      ),
      link: 'insignum',
      keywords: ['Android Studio', 'Arduino', 'User-Centered Design'],
    },

    {
      title: 'Espoora - Make your stay more eventful',
      description:
        'Design and Business analysis of Espoora, a platform for publishing, managing, and joining events in Espoo',
      cover: '../../assets/images/project-covers/Cover Espoora.png',
      link: 'espoora',
      keywords: ['Design', 'Business Modelling'],
    },

    {
      title: 'Pearly',
      description:
        'UX study of a mobile app where people can play tabletop games and game creators can test their new games',
      cover: '../../assets/images/project-covers/Cover Pearly.jpg',
      link: 'pearly',
      keywords: ['Figma', 'Android Studio', 'User-Centered Design'],
    },

    {
      title: 'Bookflix',
      description: 'UX study of an application to find and to read books',
      cover: "../../assets/images/project-covers/Cover Bookflix.gif",
      link: 'bookflix',
      keywords: ['Figma', 'User-Centered Design', 'Usability Testing'],
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  getSafeVideoUrl(url: any): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  playVideo(hasVideo: boolean) {
    if (!hasVideo) {
      return;
    }

    const videoIframe = this.videoPlayer.nativeElement;
    const videoSrc = videoIframe.src;
    
    if (!videoSrc.includes('autoplay=1')) {
      videoIframe.src = videoSrc + '&autoplay=1';
    }

    this.imageCover.nativeElement.style.opacity = "0";
    this.imageCover.nativeElement.style.zIndex = "-2";

    this.showImage = false;
  }
}
