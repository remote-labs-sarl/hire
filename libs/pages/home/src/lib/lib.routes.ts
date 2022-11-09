import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const pagesHomeRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: HomeComponent },
];
