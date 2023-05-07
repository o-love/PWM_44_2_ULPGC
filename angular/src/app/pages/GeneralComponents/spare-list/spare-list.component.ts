import {Component, Input} from '@angular/core';
import {Reparation} from "../../../models/Reparation/reparation";

@Component({
  selector: 'app-spare-list',
  templateUrl: './spare-list.component.html',
  styleUrls: ['./spare-list.component.sass']
})
export class SpareListComponent {
  @Input()
  reparation: Reparation[] = [];
}
