import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface Group {
  title: string;
  icon: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  groups: Group[] = [
    { title: 'Languages', icon: '💻', items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
    { title: 'Frameworks', icon: '🧩', items: ['Angular', 'Bootstrap 5'] },
    { title: 'Tools', icon: '🛠️', items: ['Git Hub', 'VS Code', 'Visual Studio', 'Code Blocks'] },
    { title: 'Concepts', icon: '🎯', items: ['Responsive Design', 'Angular Components', 'Angular Signals', 'OOPs'] },
    { title: 'AI Tools', icon: '🤖', items: ['Codex', 'Claude Ai', 'GitHub Copilot.', 'Chat GPT'] },
  ];
}