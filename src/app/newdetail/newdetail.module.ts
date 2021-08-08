import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewdetailPageRoutingModule } from './newdetail-routing.module';

import { NewdetailPage } from './newdetail.page';
import { BadgeModule } from '../components/badge/badge.module';
import { ButtonModule } from '../components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewdetailPageRoutingModule,
    BadgeModule,
    ButtonModule
  ],
  declarations: [NewdetailPage]
})
export class NewdetailPageModule {}
