import { Component } from '@angular/core';

@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.sass']
})
export class DataUserComponent {
  title = "dataUser";
  nombre: string = "Andrea";
  correo: string = "andrea@correo.com";
  numeroCoches: number=5;
  numeroRepostajes: number=100;
  numeroReparaciones: number=20;

  constructor() {
  }

}
