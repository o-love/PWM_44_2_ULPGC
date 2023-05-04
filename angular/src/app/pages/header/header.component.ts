import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {User} from "../../models/User/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  host: {
    id: "headerPadre",
    class: "text-center",
    style: "background-color: #0065A3"
  }
})

export class HeaderComponent implements OnInit {
  isLoggedIn: boolean | undefined;

  Rol = "";

  user = {}

  constructor(private authService: AuthService) {
  }

  checkUserLoged() {
    try {
      const userJson = localStorage.getItem("userLoged");
      if (userJson !== null) {
        this.user = JSON.parse(userJson);
        // @ts-ignore
        this.Rol = this.user.is_admin ? "usuarioLogeado" : "Admin";
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
        this.Rol = "usuarioNoLogeado";
      }
    } catch (error) {
      console.error("Error al analizar el objeto JSON", error);
      this.isLoggedIn = false;
      this.Rol = "usuarioNoLogeado";
    }
  }

  ngOnInit() {

    this.checkUserLoged()
    this.authService.isLoggedIn.subscribe(
      (loggedIn) => {
        console.log("header => ", loggedIn);
        this.isLoggedIn = loggedIn;
        this.checkUserLoged()
      }
    );
  }

  miLogOut() {
    this.authService.logout()
    console.log("loged out")
  }
}
