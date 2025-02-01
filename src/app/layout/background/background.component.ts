import { Component, HostListener , ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements AfterViewInit {
  divs: { className: string; top: number; left: number; size: number}[] = [];

  @ViewChild('background') backgroundElement!: ElementRef;

  ngAfterViewInit() {
    const classes = ['primary', 'secondary'];
    const numDivs = 500;
    const minSize = 50;
    const maxSize = 250;
    const height = 40000;

    for (let i = 0; i < numDivs; i++) {
      var size = Math.random() * maxSize + minSize; 
      this.divs.push({
        className: classes[Math.floor(Math.random() * classes.length)],
        top: Math.random() * height, 
        left: Math.random() * window.innerWidth - ((minSize + maxSize) / 2),
        size,
      });
    }
  }
}