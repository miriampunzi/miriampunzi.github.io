import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-images',
  templateUrl: './arrow-images.component.html',
  styleUrls: ['./arrow-images.component.css']
})
export class ArrowImagesComponent {
  @Input() imgBefore : any
  @Input() imgAfter : any
}
