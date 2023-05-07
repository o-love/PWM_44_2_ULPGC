import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import { Pumping} from "../../../../models/Pumping/pumping";
import {PumpingService} from "../../../../services/pumping/pumping.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../services/user/user.service";
import {AuthService} from "../../../../services/auth/auth.service";
import {User} from "../../../../models/User/user.model";
import {CarModel} from "../../../../models/Car/car.model";
import {catchError, of, tap} from "rxjs";

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
  user: User | undefined;
  error = false;
  submitted = false;

  model: Pumping = {
    precioCombustible: "",
    kmActual: "",
    precioTotal: "",
    userId: "",
    fecha: "",
    idCar: "",
  }
  constructor(private renderer: Renderer2,private route: ActivatedRoute, private el: ElementRef, private pumpingService:PumpingService, private authService: AuthService) {
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
      if (this.user?.id) {
        try {
          let id = this.route.snapshot.params['carId'];
          const result = await this.pumpingService.createPumping(this.model, this.user.id,id).toPromise();
          console.log("Formulario enviado");
          this.error = false;
          this.submitted = true;

        } catch (error) {
          console.log("Error al enviar el formulario");
          this.error = true;
        }
      }
    }
  }



  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(
      async (user) => {
        this.user = user;
        console.log("userLogged: ", this.user)
      }
    );
  }
}
