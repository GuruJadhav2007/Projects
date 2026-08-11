import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  // Add more routes here later if you split into separate pages,
  // e.g. { path: 'blog', component: Blog }
];
