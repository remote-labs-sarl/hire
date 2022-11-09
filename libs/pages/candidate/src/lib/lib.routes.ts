import { CandidateComponent } from './candidate/candidate.component';
import { Route } from '@angular/router';
import { ListingComponent } from './listing/listing.component';

export const pagesCandidateRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: ListingComponent },
  { path: ':id', pathMatch: 'full', component: CandidateComponent },
];
