import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-language-card',
  templateUrl: './language-card.component.html',
  styleUrls: ['./language-card.component.css']
})
export class LanguageCardComponent {
  @Input() imagePath : any
  @Input() description : any
}
