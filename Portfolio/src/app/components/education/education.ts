import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface Degree {
  title: string;
  school: string;
  period: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  degrees: Degree[] = [
    { title: 'B.Sc. Computer Science', school: 'Yashwantro Chavan College of Science, Karad', period: '2025 — Present' },
    { title: 'Higher Secondary (Science)', school: 'Adv.Dadasaheb Chavan Memorial institute of Science, Malwadi(Masur)', period: '2024 — 2025' },
  ];
}
