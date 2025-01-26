import { Component, OnInit, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  isNavbarVisible: boolean = false
  isCollapsed: boolean = false

  navbar : any

  ngOnInit() {
    if (!this.navbar)
      this.navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
      if (!this.isCollapsed) {
      if (window.scrollY > 0) {
        if (!this.isNavbarVisible) {
          this.Show()
          this.isNavbarVisible = true;
        }
      } else {
        if (this.isNavbarVisible) {
          this.Hide()
          this.isNavbarVisible = false;
        }
      }
    }
    }); 
  }

  OnClick() {
    this.isCollapsed = !this.isCollapsed

    if (this.isCollapsed) {
      this.Show()
    }
  }

  Hide() {
    this.navbar?.classList.remove('navbar-visible');
    this.navbar?.classList.add('navbar-invisible');
  }

  Show() {
    this.navbar?.classList.remove('navbar-invisible');
    this.navbar?.classList.add('navbar-visible');
  }
}