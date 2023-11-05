import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hobby-card',
  templateUrl: './hobby-card.component.html',
  styleUrls: ['./hobby-card.component.css']
})
export class HobbyCardComponent {
  @Input() imagePath : any
  @Input() description : any
}
