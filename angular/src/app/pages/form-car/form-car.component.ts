import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CarModel} from "../../models/Car/car.model";
import {CarService} from "../../services/car/car.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

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
    userId: "",
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

  constructor(private route: ActivatedRoute, private router: Router, private carService: CarService, private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnInit(): void {
    const carId = this.route.snapshot.params["carId"];
    if (carId) {
      this.carService.getCarByID(carId).subscribe((car) => {
        console.log(car);
        this.model = <CarModel>car;
      });
    }
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
    console.log(this.model.seguro_coche)
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

  onFileChange(event: any) {
    console.log(event)
    const file = event.target.files[0];

    if (file) {
      this.file = file;
    }
  }

  onSubmit(form: NgForm) {
    if(form.valid) {
      this.sumbitForm().subscribe((car) => {
        this.router.navigate(['cardCar']); // TODO: GO to Car Page
      })
    }
  }

  update() : Observable<CarModel> {
    if (this.file) {
      return this.carService.updateCarWithImage(this.model, this.file);
    }
    else {
      return this.carService.update(this.model);
    }
  }

  create(): Observable<CarModel> {
    if (this.file) {
      return this.carService.storeCarWithImage(this.model, this.file);
    }
    else {
      return this.carService.storeCar(this.model);
    }
  }

  sumbitForm(): Observable<CarModel> {
    if(this.model.id) {
      return this.update()
    }
    else {
      return this.create();
    }
  }
}
