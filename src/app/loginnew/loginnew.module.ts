import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginnewPageRoutingModule } from './loginnew-routing.module';

import { LoginnewPage } from './loginnew.page';
import { SharedModule } from '../components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginnewPageRoutingModule,
    SharedModule
  ],
  declarations: [LoginnewPage]
})
export class LoginnewPageModule {}
