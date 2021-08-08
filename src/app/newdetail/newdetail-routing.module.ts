import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewdetailPage } from './newdetail.page';

const routes: Routes = [
  {
    path: '',
    component: NewdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewdetailPageRoutingModule {}
