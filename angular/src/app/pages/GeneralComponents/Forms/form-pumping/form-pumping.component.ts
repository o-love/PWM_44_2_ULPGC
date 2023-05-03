import {Component, ElementRef, Renderer2} from '@angular/core';
import { PumpingModel} from "../../../../models/Pumping/pumping.model";

@Component({
  selector: 'app-form-pumping',
  templateUrl: './form-pumping.component.html',
  styleUrls: ['./form-pumping.component.sass'],
  host:{
    id:"mainContent",
    class:"hideOnMobile",
  }
})
export class FormPumpingComponent {

  model: PumpingModel = {
    precioCombustible: "",
    kmActual: "",
    precioTotal: "",
  }

  constructor(private renderer: Renderer2, private el: ElementRef) {
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
      console.log("Formulario enviado");
    }
  }
}
