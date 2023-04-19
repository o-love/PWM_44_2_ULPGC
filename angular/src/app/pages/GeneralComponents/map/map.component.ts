import {Component, Input} from '@angular/core';
import {View, Map} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {GasStation} from "../../../models/GasStation/gas-station.model";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent {

  @Input() gasStations: GasStation[] = [];
  Map: Map | undefined;

  ngOnInit() {
    this.Map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [new TileLayer({
        source: new OSM()
      })],
      target: 'ol-map',
    });
    console.log(this.Map);
  }
}
