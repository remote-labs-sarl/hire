import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pagesProfilesRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pagesProfilesRoutes)],
})
export class PagesProfilesModule {}
