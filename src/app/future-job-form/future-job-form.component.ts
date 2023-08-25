import { Component } from '@angular/core';

@Component({
  selector: 'app-future-job-form',
  templateUrl: './future-job-form.component.html',
  styleUrls: ['./future-job-form.component.scss']
})
export class FutureJobFormComponent {

    // Initialize an object to store form data
    FutureJobFormData: any = {};
  
    // Function to handle form submission
    submitForm() {
      // Process the form data as needed (e.g., send it to an API)
      console.log('Form Data:', this.FutureJobFormData);
  
      // Reset the form after submission
      this.FutureJobFormData = {};
    }
  

}
