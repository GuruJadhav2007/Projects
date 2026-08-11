import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  year = new Date().getFullYear();

  // Shows the "back to top" button only after the user has scrolled down a bit
  showTopBtn = signal(false);

  onWindowScroll() {
    this.showTopBtn.set(window.scrollY > 400);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
