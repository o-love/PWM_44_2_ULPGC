import {Component, ElementRef, Renderer2} from '@angular/core';
import {Reparation} from "../../../../models/Reparation/reparation";
import {Pumping} from "../../../../models/Pumping/pumping";
import {ReparationService} from "../../../../services/reparation/reparation.service";
import {User} from "../../../../models/User/user.model";
import {AuthService} from "../../../../services/auth/auth.service";
import {catchError} from "rxjs";

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
  user: User | undefined;
  error = false;
  submitted = false;

  model: Reparation = {
    articuladoReparado: "",
    precio: "",
    fecha: "",
    taller: "",
    userId: "",
  }
  constructor(private renderer: Renderer2, private el: ElementRef, private reparationService: ReparationService, private authService: AuthService) {}


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
    this.authService.isLoggedIn.subscribe(
      async (user) => {
        this.user = user;
        console.log("userLogged: ", this.user)
      }
    );
  }

  onSubmit() {
    if (this.needFieldsInForm()) {
      if (this.user?.id) {
        try {
          this.reparationService.createReparation(this.model, this.user.id);
          console.log('Formulario enviado');
          this.error = false;
          this.submitted = true;
        }catch (error) {
          this.error = true;
          console.log("Error al enviar el formulario")
        }
    }}
  }
}
