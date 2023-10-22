import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  coverProjects = [
    'assets/images/Home/Cover ConcertRandomization.jpg',
    'assets/images/Home/Cover NonverbalBehaviour.jpg',
    'assets/images/Home/Cover SituatedMemories.jpg',
    'assets/images/Home/Cover InSignum.jpg',
    'assets/images/Home/Cover PopupBreak.jpg',
    'assets/images/Home/Cover Pearly.jpg',
    'assets/images/Home/Cover Bookflix.jpg',
  ]
}
