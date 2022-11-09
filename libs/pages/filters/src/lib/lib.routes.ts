import { FiltersComponent } from './filters/filters.component';
import { Route } from '@angular/router';

export const pagesFiltersRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: FiltersComponent },
];
