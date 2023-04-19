import {Component} from '@angular/core';
import {GasProvincia} from "../../models/GasStation/gas-provincia.model";
import {GasStation} from "../../models/GasStation/gas-station.model";
import {GasStationService} from "../../services/gasStation/gas-station.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent {

  gasStations: GasStation[] = [];

  constructor(private gasStationService: GasStationService) {
  }

  ngOnInit(): void {
    this.getGasStations();
    console.log(this.gasStations);
  }

  getGasStations(): void {
    this.gasStationService.getGasStationProvincias().subscribe((provincias: GasProvincia[]) => {
      provincias.forEach((provincia: GasProvincia) => {
        this.gasStationService.getGasStationsByProvince(provincia.IDPovincia).subscribe((gasStationList: GasStation[]) => {
          this.gasStations = [...this.gasStations, ...gasStationList];
        });
      });
    });
  }
}
