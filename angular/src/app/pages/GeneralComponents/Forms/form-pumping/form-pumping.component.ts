import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import { Pumping} from "../../../../models/Car/pumping";
import {PumpingService} from "../../../../services/pumping/pumping.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../services/user/user.service";
import {AuthService} from "../../../../services/auth/auth.service";
import {User} from "../../../../models/User/user.model";
import {CarModel} from "../../../../models/Car/car.model";
import {catchError, of, tap} from "rxjs";
import {CarService} from "../../../../services/car/car.service";

@Component({
  selector: 'app-form-pumping',
  templateUrl: './form-pumping.component.html',
  styleUrls: ['./form-pumping.component.sass'],
  host: {
    id: "mainContent",
    class: "flex-grow-1 d-sm-flex justify-content-sm-center hideOnMobile"
  }
})

export class FormPumpingComponent implements  OnInit{
  error = false;
  submitted = false;
  car: CarModel | undefined;

  model: Pumping = {
    precioCombustible: "",
    kmActual: "",
    precioTotal: "",
    fecha: "",
  }
  constructor(private renderer: Renderer2,private route: ActivatedRoute, private el: ElementRef, private pumpingService:PumpingService, private carService: CarService, private router: Router) {
  }

  needFieldsInForm() {
    const validacion= this.model.precioCombustible && this.model.kmActual && this.model.precioTotal;
    let formSubmit = this.el.nativeElement.querySelector('#button-add-pumping');
    if(!validacion){
      this.renderer.removeClass(formSubmit, 'formButton');
      this.renderer.addClass(formSubmit, 'boton-deshabilitado');
    }else{
      this.renderer.removeClass(formSubmit, 'boton-deshabilitado');
      this.renderer.addClass(formSubmit, 'formButton');
    }
    return validacion;
  }

  async onSubmit() {
    if (this.needFieldsInForm()) {
      this.pumpingService.createPumping(this.model, this.car!).subscribe(() => {
        this.router.navigate(['carView', {carId: this.car?.id}]);
      });


      console.log("Formulario enviado");
      this.error = false;
      this.submitted = true;
    }
  }

  ngOnInit(): void {
    this.carService.getCarByID(this.route.snapshot.params['carId']).subscribe((car) => {
      this.car = <CarModel>car;
    })
  }
}
