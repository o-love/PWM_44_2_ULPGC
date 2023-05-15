import {Component, Input} from '@angular/core';
import {GasStation} from "../../../models/GasStation/gas-station.model";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-gas-station-list',
  templateUrl: './gas-station-list.component.html',
  styleUrls: ['./gas-station-list.component.sass']
})
export class GasStationListComponent {

  @Input()
  gasStations: GasStation[] = [];

  constructor(private router: Router) {
  }

  openGasStation(gasStation: GasStation): void {
    this.router.navigateByUrl('/gasStation', {state: gasStation});
  }
}
