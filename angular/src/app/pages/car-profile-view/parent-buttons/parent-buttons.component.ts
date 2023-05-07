import {Component, Input} from '@angular/core';
import {Pumping} from "../../../models/Car/pumping";
import {Reparation} from "../../../models/Car/reparation";

interface ParentButtonsProps {
  showChild1: boolean;
  showChild2: boolean;
  onShowChild1: () => void;
  onShowChild2: () => void;
}
@Component({
  selector: 'app-parent-buttons',
  templateUrl: './parent-buttons.component.html',
  styleUrls: ['./parent-buttons.component.sass'],
})

export class ParentButtonsComponent {
  tablaSeleccionada = 1;
  @Input() pumpingData: Pumping[] = [];
  @Input() reparationData: Reparation[] = [];

  seleccionarTabla(tabla: number) {
    this.tablaSeleccionada = tabla;
  }
}
