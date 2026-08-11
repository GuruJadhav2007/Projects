import { Component, OnInit, OnDestroy, signal } from '@angular/core';

/**
 * Hero
 * ----
 * The first section people see. Shows your name, and a role
 * that "types" itself out and cycles through a few titles
 * (a common, easy-to-implement effect that makes a hero feel alive).
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {
  roles = ['Frontend Developer', 'Angular Developer', 'Web Developer'];

  displayText = signal('');
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.tick();
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  private tick(): void {
    const currentRole = this.roles[this.roleIndex];

    if (!this.deleting) {
      // typing forward
      this.charIndex++;
      this.displayText.set(currentRole.slice(0, this.charIndex));

      if (this.charIndex === currentRole.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.tick(), 1400); // pause before deleting
        return;
      }
    } else {
      // deleting backward
      this.charIndex--;
      this.displayText.set(currentRole.slice(0, this.charIndex));

      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }

    const speed = this.deleting ? 40 : 80;
    this.timer = setTimeout(() => this.tick(), speed);
  }
}
