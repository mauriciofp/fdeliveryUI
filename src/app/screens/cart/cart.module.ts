import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { ButtonModule } from 'src/app/components/button/button.module';
import { CartItemModule } from 'src/app/components/cart-item/cart-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    CartItemModule,
    ButtonModule,
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
