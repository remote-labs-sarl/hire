import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pagesFiltersRoutes } from './lib.routes';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pagesFiltersRoutes)],
  declarations: [FiltersComponent],
})
export class PagesFiltersModule {}
