import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprenticeshipsPage } from './apprenticeships.page';

const routes: Routes = [
  {
    path: '',
    component: ApprenticeshipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprenticeshipsPageRoutingModule {}
