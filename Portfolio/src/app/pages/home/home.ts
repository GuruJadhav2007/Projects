import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Skills } from '../../components/skills/skills';
import { Projects } from '../../components/projects/projects';
import { Education } from '../../components/education/education';
import { Contact } from '../../components/contact/contact';

/**
 * Home
 * ----
 * Single-page portfolio: this just stacks every section in
 * order. Navbar links (#about, #skills...) scroll to these
 * sections instead of navigating to separate pages.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, About, Skills, Projects, Education, Contact],
  templateUrl: './home.html',
})
export class Home {}
