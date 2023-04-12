import {Component} from '@angular/core';
import {GasStation} from "../../../models/GasStation/gas-station.model";
import {GasStationService} from "../../../services/gasStation/gas-station.service";

@Component({
  selector: 'app-gas-station-list',
  templateUrl: './gas-station-list.component.html',
  styleUrls: ['./gas-station-list.component.sass']
})
export class GasStationListComponent {
  gasStations: GasStation[] = [];


  constructor(private gasStationService: GasStationService) {
  }

  ngOnInit(): void {
    this.getGasStations();
    console.log(this.gasStations);
  }

  getGasStations(): void {
    this.gasStationService.getGasStations().subscribe((gasStationList: GasStation[]) => {
      this.gasStations = [...this.gasStations, ...gasStationList];
    });
  }
}
