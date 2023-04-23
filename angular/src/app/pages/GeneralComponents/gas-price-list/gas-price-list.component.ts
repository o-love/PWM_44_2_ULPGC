import {Component, Input} from '@angular/core';
import {GasPrice} from "../../../models/GasStation/gas-price.model";

@Component({
  selector: 'app-gas-price-list',
  templateUrl: './gas-price-list.component.html',
  styleUrls: ['./gas-price-list.component.sass']
})
export class GasPriceListComponent {

  @Input()
  gasPrices: GasPrice[] = [];

}
