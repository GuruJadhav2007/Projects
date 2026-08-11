import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  name = '';
  email = '';
  message = '';

  submitted = signal(false);
  error = signal('');

  sending = false;

  constructor(private http: HttpClient) {}

  onSubmit() {

    if (this.sending) {
      return;
    }

    this.sending = true;
    this.submitted.set(false);
    this.error.set('');

    const contactData = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.http
      .post('http://localhost:3000/api/contact', contactData)
      .subscribe({
        next: (response: any) => {

          console.log('Email sent:', response);

          this.submitted.set(true);

          this.name = '';
          this.email = '';
          this.message = '';

          this.sending = false;
        },

        error: (error) => {

          console.error('Email sending failed:', error);

          this.error.set(
            'Message could not be sent. Please try again.'
          );

          this.sending = false;
        }
      });
  }
}