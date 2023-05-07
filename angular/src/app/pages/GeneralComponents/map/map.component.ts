import {Component, Input} from '@angular/core';
import {GasStation} from "../../../models/GasStation/gas-station.model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent {

  @Input() gasStations: GasStation[] = [];

  @Input()
  options: google.maps.MapOptions = {
    center: {lat: 28, lng: -16},
    zoom: 7
  };

  markerClustererImagePath =
    'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';

  constructor(private router: Router) {
  }

  markerClick(gasStation: GasStation) {
    this.router.navigateByUrl('/gasStation', {state: gasStation});

  }
}
