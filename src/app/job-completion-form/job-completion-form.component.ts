import { Component } from '@angular/core';

@Component({
  selector: 'app-job-completion-form',
  templateUrl: './job-completion-form.component.html',
  styleUrls: ['./job-completion-form.component.scss']
})
export class JobCompletionFormComponent {
  // Initialize an object to store form data
  JobCompletionData: any = {};

  // Function to handle form submission
  submitForm() {
    // Process the form data as needed (e.g., send it to an API)
    console.log('Form Data:', this.JobCompletionData);

    // Reset the form after submission
    this.JobCompletionData = {};
  }

}
