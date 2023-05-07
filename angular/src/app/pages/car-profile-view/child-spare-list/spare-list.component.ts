import {Component, Input, OnInit} from '@angular/core';
import {Reparation} from "../../../models/Car/reparation";



@Component({
  selector: 'app-child-spare-list',
  templateUrl: './spare-list.component.html',
  styleUrls: ['./spare-list.component.sass'],

})
export class SpareListComponent implements OnInit{
  @Input() reparation: Reparation[] = [];

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.reparation)
  }
}
