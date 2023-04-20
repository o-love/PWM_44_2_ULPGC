import { Component,OnInit } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {User} from "../../models/User/user.model";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  host:{
    id:"headerPadre",
    class:"text-center",
    style:"background-color: #0065A3"
  }
})

export class HeaderComponent implements OnInit{

  Rol: String = "usuarioNoLogeado";
  constructor(private userService:UserService) {
  }
  ngOnInit(): void {

  }
}
