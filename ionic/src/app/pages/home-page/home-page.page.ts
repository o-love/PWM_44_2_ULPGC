import { Component, OnInit } from '@angular/core';
import {GasStation} from "../../models/GasStation/gas-station.model";
import {GasStationService} from "../../services/gas-station.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  gasStations: GasStation[] = [];

  constructor(private gasStationService: GasStationService) {
  }

  ngOnInit(): void {
    this.getGasStations();
  }

  getGasStations(): void {
    this.gasStationService.getCanaryIslandsGasStations().subscribe((gasStationList: GasStation[]) => {
      this.gasStations = gasStationList;
      console.log(this.gasStations);
    });
  }
}
