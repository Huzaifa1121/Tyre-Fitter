import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  // Example condition: Set these properties based on user authentication status.
  showHeader = true; // Show header by default
  showFooter = true; // Show footer by default
  showSidebar = false; // Show sidebar only when a specific condition is met

  // ...other logic to determine the conditions...
}
