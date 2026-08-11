import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RevealDirective } from '../../directives/reveal.directive';

interface Project {
  title: string;
  description: string;
  tags: string[];
  previewUrl: string;
  safePreviewUrl: SafeResourceUrl;
  liveUrl?: string;
  codeUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private sanitizer = inject(DomSanitizer);

  // Raw project data — edit this list with your real projects
  private rawProjects: Omit<Project, 'safePreviewUrl'>[] = [
    {
      title: '🎮 Tic Tac Toe Game',
      description: 'A simple and interactive Tic Tac Toe game built with HTML, CSS, and JavaScript, featuring a clean interface and an easy-to-use gameplay experience.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      previewUrl: 'https://tic-tac-toe-play-zone.netlify.app',
      liveUrl: 'https://tic-tac-toe-play-zone.netlify.app',
      codeUrl: 'https://github.com/GuruJadhav2007/Projects/tree/main/Tic_Tac_Toe',
    },
    {
      title: '🧪 Chemical Company Website',
      description: 'A responsive chemical company website built with Angular, TypeScript, CSS, and Bootstrap, showcasing the company’s products, services, infrastructure, and business information.',
      tags: ['Angular', 'CSS','Bootstrap', 'TypeScript'],
      previewUrl: 'https://chemical-industry-v1.netlify.app/',
      liveUrl: 'https://chemical-industry-v1.netlify.app/',
      codeUrl: 'https://github.com/GuruJadhav2007/Projects/tree/main/Chemical_Industry/Chemical_Industry',
    },
    {
      title: '📝 Portfolio Website',
      description: 'A modern responsive portfolio showcasing my technical skills, real-world projects, and hands-on development experience, designed to demonstrate my ability to build responsive, user-focused web applications.',
      tags: ['Angular','HTML', 'CSS', 'TypeScript'],
      previewUrl: 'https://portfolio-guruprasad-jadhav.netlify.app',
      codeUrl: 'https://github.com/GuruJadhav2007/Projects/tree/main/Portfolio',
    },
  ];

  // Sanitize each URL exactly once, up front — this is what NG0100
  // was complaining about when it was done lazily/mutated later.
  projects: Project[] = this.rawProjects.map((p) => ({
    ...p,
    safePreviewUrl: this.sanitizer.bypassSecurityTrustResourceUrl(p.previewUrl),
  }));
}