import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;

  onSubmit() {
    // Perform registration logic here, such as sending data to the server
    console.log('Form submitted');
    console.log('Full Name:', this.fullName);
    console.log('Last Name:', this.lastName);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);
  }
}
