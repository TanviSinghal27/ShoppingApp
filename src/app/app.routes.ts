import { Routes } from '@angular/router';
import { FirstPage } from './first-page/first-page';

export const routes: Routes = [
  { path: '', component: FirstPage }, // Loads your component on startup
  { path: '**', redirectTo: '' }, // Optional: redirects any invalid URLs to your component
];
