import { Component,OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
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
  isLoggedIn = false;

  Rol: String = "usuarioNoLogeado";
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(
      (loggedIn) => {
        console.log("header => ",loggedIn);
        this.isLoggedIn = loggedIn;
        let user = localStorage.getItem("userLoged")
        if (user===null){
          this.Rol="usuarioNoLogeado"
        }else{
          if (JSON.parse(user).is_admin){
            this.Rol="Admin"
          }else{
            this.Rol="usuarioLogeado"
          }
        }

      }
    );
  }
  miLogOut(){
    this.authService.logout()
    console.log("loged out")
  }
}
