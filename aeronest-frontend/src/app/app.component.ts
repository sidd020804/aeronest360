import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  onLogin() {
    if (this.email === 'admin@example.com' && this.password === 'password123') {
      alert('Login successful!');
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
