import {Component, Input} from '@angular/core';
import {CarModel} from "../../../models/Car/car.model";
import {CarService} from "../../../services/car/car.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-car-form-icon-and-options',
  templateUrl: './car-form-icon-and-options.component.html',
  styleUrls: ['./car-form-icon-and-options.component.sass'],

})
export class CarFormIconAndOptionsComponent {
  @Input() model: CarModel | undefined = {
    userId: "",
    id: "",
    matricula: "", marca: "", modelo: "", combustible: "",
    aceite_motor: "", aceite_direccion: "", agua_radiador: "",
    agua_parabrisas: "", liquido_frenos: "", valculina_caja_cambios: "",
    valvulina_diferencial: "", agua_bateria: "", filtro_aceite: "",
    filtro_aire: "", filtro_combustible: "", presion_neumaticos: "",
    correo_distribucion: "", correa_altenador: "", limpieza_bujias: "",
    cambio_bujias: "", impuesto_circulacion: "", seguro_coche: "",
    revision_itv: "", foto_coche_src: "", pumpings: [], reparation: []
  }
  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) {

  }

  navigateToAddReparation(): void {
    this.router.navigate(['formReparation', {carId: this.model?.id}]);
  }

  navigateToAddPumping(): void {
    this.router.navigate(['formPumping', {carId: this.model?.id}]);
  }

  ngOnInit(): void {
  }
}
