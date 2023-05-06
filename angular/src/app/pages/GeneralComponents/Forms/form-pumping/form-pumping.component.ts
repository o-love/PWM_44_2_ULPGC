import {Component, ElementRef, Renderer2} from '@angular/core';
import { Pumping} from "../../../../models/Pumping/pumping";
import {PumpingService} from "../../../../services/pumping/pumping.service";
import {Router} from "@angular/router";
import {UserService} from "../../../../services/user/user.service";

@Component({
  selector: 'app-form-pumping',
  templateUrl: './form-pumping.component.html',
  styleUrls: ['./form-pumping.component.sass'],
  host: {
    id: "mainContent",
    class: "flex-grow-1 d-sm-flex justify-content-sm-center hideOnMobile"
  }
})

export class FormPumpingComponent {

  model: Pumping = {
    precioCombustible: "",
    kmActual: "",
    precioTotal: "",
  }
  constructor(private renderer: Renderer2, private el: ElementRef, private pumpingService:PumpingService) {
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

  onSubmit() {
    if(this.needFieldsInForm()) {
      this.pumpingService.createPumping(this.model);
      console.log("Formulario enviado");
    }
  }
}
