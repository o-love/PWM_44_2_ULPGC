import {Component, Input} from '@angular/core';
import {GasStation} from "../../../models/GasStation/gas-station.model";

@Component({
  selector: 'app-gas-station-list',
  templateUrl: './gas-station-list.component.html',
  styleUrls: ['./gas-station-list.component.sass']
})
export class GasStationListComponent {

  @Input()
  gasStations: GasStation[] = [];
}
