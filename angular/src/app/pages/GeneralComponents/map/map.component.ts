import {Component, Input} from '@angular/core';
import {GasStation} from "../../../models/GasStation/gas-station.model";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent {

  @Input() gasStations: GasStation[] = [];

  options: google.maps.MapOptions = {
    center: {lat: 28, lng: -16},
    zoom: 7
  };
  markerClustererImagePath =
    'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
}
