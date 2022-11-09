import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { pagesHomeRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pagesHomeRoutes),
    MatListModule,
    MatIconModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class PagesHomeModule {}
