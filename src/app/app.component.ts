import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isNotLoginComponent: boolean = true;
  isNotRsgisterComponent: boolean = true;


  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check the active route component to determine if it's the login component.
        this.isNotLoginComponent = !this.router.isActive('/login', true);
        this.isNotRsgisterComponent = !this.router.isActive('/register', true);

        
        
      }
    });
  }
}
