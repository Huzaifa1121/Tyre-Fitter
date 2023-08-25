import { Component } from '@angular/core';

@Component({
  selector: 'app-fill-quote-form',
  templateUrl: './fill-quote-form.component.html',
  styleUrls: ['./fill-quote-form.component.scss']
})
export class FillQuoteFormComponent {

    // Initialize an object to store form data
    FillQuoteForm: any = {};
  
    // Function to handle form submission
    submitForm() {
      // Process the form data as needed (e.g., send it to an API)
      console.log('Form Data:', this.FillQuoteForm);
  
      // Reset the form after submission
      this.FillQuoteForm = {};
    }
  

}
