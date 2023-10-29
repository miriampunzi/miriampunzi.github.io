import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  isNavbarVisible: boolean = false;

  ngOnInit() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        if (!this.isNavbarVisible) {
          navbar?.classList.remove('navbar-invisible');
          navbar?.classList.add('navbar-visible');
          this.isNavbarVisible = true;
        }
      } else {
        if (this.isNavbarVisible) {
          navbar?.classList.remove('navbar-visible');
          navbar?.classList.add('navbar-invisible');
          this.isNavbarVisible = false;
        }
      }
    });
  }
}