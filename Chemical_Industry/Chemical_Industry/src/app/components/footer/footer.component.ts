import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  newsletterEmail = '';
  newsletterSubmitted = false;

  onNewsletterSubmit() {
    if (this.newsletterEmail) {
      this.newsletterSubmitted = true;
      this.newsletterEmail = '';
      setTimeout(() => this.newsletterSubmitted = false, 4000);
    }
  }
}
