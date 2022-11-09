import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pagesCandidateRoutes } from './lib.routes';
import { CandidateComponent } from './candidate/candidate.component';
import { ListingComponent } from './listing/listing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pagesCandidateRoutes),
    MatListModule,
  ],
  declarations: [CandidateComponent, ListingComponent],
})
export class PagesCandidateModule {}
