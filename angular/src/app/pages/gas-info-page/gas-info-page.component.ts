import {Component, Input} from '@angular/core';
import {GasStation} from "../../models/GasStation/gas-station.model";

@Component({
  selector: 'app-gas-info-page',
  templateUrl: './gas-info-page.component.html',
  styleUrls: ['./gas-info-page.component.sass']
})
export class GasInfoPageComponent {

  gasStation: GasStation | undefined;
}
