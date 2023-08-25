import { Component } from '@angular/core';

@Component({
  selector: 'app-discount-form',
  templateUrl: './discount-form.component.html',
  styleUrls: ['./discount-form.component.scss']
})
export class DiscountFormComponent {

  // Initialize an object to store form data
  DiscountForm: any = {};
  
  // Function to handle form submission
  submitForm() {
    // Process the form data as needed (e.g., send it to an API)
    console.log('Form Data:', this.DiscountForm);

    // Reset the form after submission
    this.DiscountForm = {};
  }
}
