import { Component } from '@angular/core';

@Component({
  selector: 'app-live-job-form',
  templateUrl: './live-job-form.component.html',
  styleUrls: ['./live-job-form.component.scss']
})
export class LiveJobFormComponent {

  // Initialize an object to store form data
  liveJobFormData: any = {};

  // Function to handle form submission
  submitForm() {
    // Process the form data as needed (e.g., send it to an API)
    console.log('Form Data:', this.liveJobFormData);

    // Reset the form after submission
    this.liveJobFormData = {};
  }
}
