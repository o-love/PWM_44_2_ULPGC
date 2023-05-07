import {Component, Input} from '@angular/core';
import {Pumping} from "../../../models/Pumping/pumping";
import {Reparation} from "../../../models/Reparation/reparation";

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
  pumpingData: Pumping[] = [
    { fecha: '2022-01-01', kmActual: "100", precioCombustible: "1.5", precioTotal:"",userId: "" },
    { fecha: '2022-02-01', kmActual: "200", precioCombustible: "1.6", precioTotal:"",userId: "" },
    { fecha: '2022-03-01', kmActual: "300", precioCombustible: "1.7", precioTotal:"",userId: "" },
  ];
  reparationData: Reparation[] = [
    { articuladoReparado: 'engine', fecha: '2022-01-01', precio: "100", taller: 'Taller A' , userId:""},
    { articuladoReparado: 'transmission', fecha: '2022-02-01', precio: "200", taller: 'Taller B' , userId:""},
    { articuladoReparado: 'brakes', fecha: '2022-03-01', precio: "300", taller: 'Taller C' , userId:""},
  ];

  seleccionarTabla(tabla: number) {
    this.tablaSeleccionada = tabla;
  }
}
