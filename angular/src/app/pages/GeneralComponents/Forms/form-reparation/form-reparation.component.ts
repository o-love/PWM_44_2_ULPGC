import {Component, ElementRef, Renderer2} from '@angular/core';
import {ReparationModel} from "../../../../models/Reparation/reparation.model";
import {PumpingModel} from "../../../../models/Pumping/pumping.model";

@Component({
  selector: 'app-form-reparation',
  templateUrl: './form-reparation.component.html',
  styleUrls: ['./form-reparation.component.sass'],
  host:{
    id:"mainContent",
    class:"hideOnMobile",
  }
})

export class FormReparationComponent {
  model: ReparationModel = {
    articuladoReparado: "",
    precio: "",
    fecha: "",
    taller: "",
  }


  constructor(private renderer: Renderer2, private el: ElementRef) {}

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
      this.renderer.removeClass(formSubmit, 'boton-deshabilitado');
      this.renderer.addClass(formSubmit, 'formButton');
    }
    return validacion;
  }

  onSubmit() {
    if (this.needFieldsInForm()) {
      console.log('Formulario enviado');
    }
  }

}
