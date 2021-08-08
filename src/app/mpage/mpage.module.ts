import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MpagePageRoutingModule } from './mpage-routing.module';

import { MpagePage } from './mpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MpagePageRoutingModule
  ],
  declarations: [MpagePage]
})
export class MpagePageModule {}
