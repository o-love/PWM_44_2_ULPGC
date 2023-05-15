import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePagePageRoutingModule } from './home-page-routing.module';

import { HomePagePage } from './home-page.page';
import {HeaderComponent} from "../../header/header.component";
import {GoogleMapsModule} from "@angular/google-maps";
import {GasStationListComponent} from "./gas-station-list/gas-station-list.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePagePageRoutingModule,
    GoogleMapsModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HomePagePage, HeaderComponent, GasStationListComponent]
})
export class HomePagePageModule {}
