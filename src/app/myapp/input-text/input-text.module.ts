import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputTextPageRoutingModule } from './input-text-routing.module';

import { InputTextPage } from './input-text.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputTextPageRoutingModule
  ],
  declarations: [InputTextPage]
})
export class InputTextPageModule {}
