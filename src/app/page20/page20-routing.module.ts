import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page20Page } from './page20.page';

const routes: Routes = [
  {
    path: '',
    component: Page20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page20PageRoutingModule {}
