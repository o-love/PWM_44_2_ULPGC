import {Component, ElementRef, Input, Renderer2} from '@angular/core';
import {Reparation} from "../../../../models/Car/reparation";
import {ReparationService} from "../../../../services/reparation/reparation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../../../../services/car/car.service";
import {CarModel} from "../../../../models/Car/car.model";

@Component({
  selector: 'app-form-reparation',
  templateUrl: './form-reparation.component.html',
  styleUrls: ['./form-reparation.component.sass'],
  host: {
    id: "mainContent",
    class: "flex-grow-1 d-sm-flex justify-content-sm-center hideOnMobile"
  }
})

export class FormReparationComponent {
  error = false;
  submitted = false;
  car: CarModel | undefined;

  model: Reparation = {
    articuladoReparado: "",
    precio: "",
    fecha: "",
    taller: "",
  }
  constructor(private renderer: Renderer2,private route: ActivatedRoute, private el: ElementRef, private carService: CarService, private router: Router, private reparationService: ReparationService) {}


  needFieldsInForm() {
    const validacion =
      this.model.articuladoReparado &&
      this.model.precio &&
      this.model.fecha &&
      this.model.taller;
    const formSubmit = this.el.nativeElement.querySelector(
      '#button-add-pumping'
    );
    if (!validacion) {
      this.renderer.removeClass(formSubmit, 'formButton');
      this.renderer.addClass(formSubmit, 'boton-deshabilitado');
    } else {
      //this.renderer.removeClass(formSubmit, 'boton-deshabilitado');
      //this.renderer.addClass(formSubmit, 'formButton');
    }
    return validacion;
  }

  ngOnInit(): void {
    this.carService.getCarByID(this.route.snapshot.params['carId']).subscribe((car) => {
      this.car = <CarModel>car;
    })
  }

  onSubmit() {
    if (this.needFieldsInForm()) {
      this.reparationService.createReparation(this.model, this.car!).subscribe(() => {
        this.router.navigate(['carView', {carId: this.car?.id}]);
      });

      console.log('Formulario enviado');
      this.error = false;
      this.submitted = true;
    }
  }
}
