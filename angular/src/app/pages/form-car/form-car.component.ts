import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CarModel} from "../../models/Car/car.model";

let var1 = "First";
let var2 = "Second";

@Component({
  selector: 'app-form-car',
  templateUrl: './form-car.component.html',
  styleUrls: ['./form-car.component.sass']
})
export class FormCarComponent implements OnInit {
  private formActual = var1;
  private formsig = var2;

  model: CarModel = {
    id: "",
    matricula: "", marca: "", modelo: "", combustible: "",
    aceite_motor: "", aceite_direccion: "", agua_radiador: "",
    agua_parabrisas: "", liquido_frenos: "", valculina_caja_cambios: "",
    valvulina_diferencial: "", agua_bateria: "", filtro_aceite: "",
    filtro_aire: "", filtro_combustible: "", presion_neumaticos: "",
    correo_distribucion: "", correa_altenador: "", limpieza_bujias: "",
    cambio_bujias: "", impuesto_circulacion: "", seguro_coche: "",
    revision_itv: "", foto_coche_src: ""
  }

  file: File | undefined;

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnInit(): void {
  }

  valForm(nform: number) {
    let actual, next;
    switch (nform) {
      case 1:
        actual = this.el.nativeElement.querySelector('#First');
        next = this.el.nativeElement.querySelector('#Second');
        break;
      case 2:
        actual = this.el.nativeElement.querySelector('#Second');
        next = this.el.nativeElement.querySelector('#Third');
        break;
      case 3:
        actual = this.el.nativeElement.querySelector('#Third');
        next = this.el.nativeElement.querySelector('#Fourth');
        break;
      case 4:
        actual = this.el.nativeElement.querySelector('#Fourth');
        next = this.el.nativeElement.querySelector('#Fifth');
        break;
      case 5:
        actual = this.el.nativeElement.querySelector('#Fifth');
        next = this.el.nativeElement.querySelector('#Sixth');
        break;
      default:
        break;
    }
    this.renderer.addClass(actual, 'displayoff');
    this.renderer.removeClass(next, 'displayoff');
  }

  needFieldsInForm() {
    const validacion= this.model.modelo && this.model.matricula && this.model.marca && this.model.combustible;
    let form1 = this.el.nativeElement.querySelector('#btnForm1');
    let formSubmit = this.el.nativeElement.querySelector('#btn-submit-form-car');
    if(!validacion){
      this.renderer.removeClass(form1, 'formButton');
      this.renderer.addClass(form1, 'boton-deshabilitado');
    }else{
      this.renderer.removeClass(form1, 'boton-deshabilitado');
      this.renderer.addClass(form1, 'formButton');
    }
    return this.model.modelo && this.model.matricula && this.model.marca && this.model.combustible;
  }
  needFieldsInFinalForm() {
    const validacion = this.model.impuesto_circulacion && this.model.seguro_coche
      && this.model.revision_itv && this.model.foto_coche_src;
    let formSubmit = this.el.nativeElement.querySelector('#btn-submit-form-car');
    if (!validacion) {
      this.renderer.removeClass(formSubmit, 'formButton');
      this.renderer.addClass(formSubmit, 'boton-deshabilitado');
    } else {
      this.renderer.removeClass(formSubmit, 'boton-deshabilitado');
      this.renderer.addClass(formSubmit, 'formButton');
    }
    return validacion;
  }

  onSubmit(form: NgForm) {
    if(form.valid) {
      console.log("Formulario Enviado",form)
    }
  }
}
