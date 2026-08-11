import { Directive, ElementRef, AfterViewInit, inject } from '@angular/core';

/**
 * appearOnScroll
 * ----------------
 * A small reusable directive that adds the CSS class "is-visible"
 * to an element the moment it scrolls into view.
 *
 * How it works:
 * 1. We grab a reference to the host element (the tag this
 *    directive is placed on) using ElementRef.
 * 2. We create an IntersectionObserver, which is a built-in
 *    browser API that watches an element and tells us when it
 *    enters/leaves the viewport — no manual scroll-event math needed.
 * 3. When the element becomes visible, we add "is-visible" and stop
 *    watching it (we only want the animation to play once).
 *
 * Usage in a template:
 *   <div class="reveal" appearOnScroll> ... </div>
 *
 * The "reveal" class (defined in styles.css) sets the *starting*
 * hidden state, and "is-visible" triggers the transition to the
 * final visible state.
 */
@Directive({
  selector: '[appearOnScroll]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit {
  // inject() is the modern way to get a dependency without a constructor
  private el = inject(ElementRef);

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('is-visible');
            observer.unobserve(entry.target); // animate once, then stop watching
          }
        });
      },
      {
        threshold: 0.15, // fire when 15% of the element is visible
      }
    );

    observer.observe(this.el.nativeElement);
  }
}
