import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MpagePage } from './mpage.page';

const routes: Routes = [
  {
    path: '',
    component: MpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MpagePageRoutingModule {}
