import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { pagesHomeRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pagesHomeRoutes),
    MatListModule,
    MatIconModule,
    MatTableModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class PagesHomeModule {}
