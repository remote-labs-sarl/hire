import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'filters',
    loadChildren: () =>
      import('@rlrecrute/pages/filters').then((m) => m.PagesFiltersModule),
  },
  {
    path: 'candidates',
    loadChildren: () =>
      import('@rlrecrute/pages/candidate').then((m) => m.PagesCandidateModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('@rlrecrute/pages/home').then((m) => m.PagesHomeModule),
    pathMatch: 'full',
  },
  // { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
