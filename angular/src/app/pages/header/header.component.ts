import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  host:{
    class:"cabecera"
  }
})

export class HeaderComponent implements OnInit{

  Rol: String = "usuarioNoLogeado";

  ngOnInit(): void {

  }

}
