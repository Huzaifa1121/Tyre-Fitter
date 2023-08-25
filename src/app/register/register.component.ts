import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],

})
export class RegisterComponent {
  constructor() { }

  onRegisterSubmit() {
    // Implement the registration logic here
    // You can access the form values using ngModel
    // Example:
    // const formData = {
    //   name: this.name,
    //   email: this.email,
    //   password: this.password
    // };
    // Send a POST request to your server to register the user
  }
}