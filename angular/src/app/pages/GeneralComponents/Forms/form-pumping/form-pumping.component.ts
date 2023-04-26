import {Component, ElementRef, Renderer2} from '@angular/core';
import {PumpingModel} from "../../../../models/Pumping/pumping.model";
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-form-pumping',
  templateUrl: './form-pumping.component.html',
  styleUrls: ['./form-pumping.component.sass']
})
export class FormPumpingComponent {

  model: PumpingModel = {
    precio_combustible: "",
    km_actual: "",
    precio_total: "",
  }

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  needFieldsInForm() {
    const validacion= this.model.precio_total && this.model.km_actual && this.model.precio_combustible;
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

  onSubmit(pumpingForm: NgForm) {
    if(pumpingForm.valid) {
      console.log("Formulario enviado");
    }
  }
}
