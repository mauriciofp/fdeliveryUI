import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input/input.component';
import { ButtonModule } from './button/button.module';
import { Button2Component } from './button2/button2.component';


@NgModule({
declarations: [InputComponent, Button2Component],
imports: [
CommonModule, IonicModule
],
exports: [InputComponent, Button2Component],
})
export class SharedModule { }
