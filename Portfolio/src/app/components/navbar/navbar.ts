import { Component, signal } from '@angular/core';

/**
 * Navbar
 * ------
 * Fixed top navigation. Tracks:
 * - menuOpen: whether the mobile menu is open
 * - scrolled: whether to show the background blur (after scrolling)
 * - activeSection: which section is currently in view, so we can
 *   highlight the matching nav link (helps people orient themselves
 *   on a long single-page site — a small but real usability win).
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOpen = signal(false);
  scrolled = signal(false);
  activeSection = signal('home');

  private sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  onWindowScroll() {
    this.scrolled.set(window.scrollY > 10);
    this.updateActiveSection();
  }

  private updateActiveSection() {
    // Find the section whose top is closest to (but above) the
    // middle of the viewport — that's the one the user is "in".
    const middle = window.scrollY + window.innerHeight / 3;

    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;

      const top = el.offsetTop;
      const bottom = top + el.offsetHeight;

      if (middle >= top && middle < bottom) {
        this.activeSection.set(id);
        break;
      }
    }
  }
}
