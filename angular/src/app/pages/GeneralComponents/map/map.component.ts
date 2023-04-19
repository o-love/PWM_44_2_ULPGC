import {Component, Input} from '@angular/core';
import {GasStation} from "../../../models/GasStation/gas-station.model";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent {

  @Input()
  gasStations: GasStation[] = [];
}
