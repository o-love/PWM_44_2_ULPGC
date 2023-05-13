import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GasInfoPageRoutingModule } from './gas-info-routing.module';

import { GasInfoPage } from './gas-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GasInfoPageRoutingModule
  ],
  declarations: [GasInfoPage]
})
export class GasInfoPageModule {}
