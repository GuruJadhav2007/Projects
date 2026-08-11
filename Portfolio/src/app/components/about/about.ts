import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective], // needed to use appearOnScroll in the template
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  stats = [
    { label: 'years learning', value: '1+' },
    { label: 'projects built', value: '6' },
  ];
}
