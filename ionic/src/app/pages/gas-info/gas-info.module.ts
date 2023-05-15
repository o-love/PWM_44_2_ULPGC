import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GasInfoPageRoutingModule } from './gas-info-routing.module';

import { GasInfoPage } from './gas-info.page';
import {HomePagePageModule} from "../home-page/home-page.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GasInfoPageRoutingModule,
    HomePagePageModule
  ],
  declarations: [GasInfoPage]
})
export class GasInfoPageModule {}
