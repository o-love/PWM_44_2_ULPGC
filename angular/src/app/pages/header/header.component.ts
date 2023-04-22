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
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem("userLoged"))
    if (this.user !== null) {
      this.isLoggedIn = true;
      // @ts-ignore
      if (this.user.is_admin) {
        this.Rol = "Admin"
      }else{
        this.Rol = "usuarioLogeado"
      }
    }else{
      this.isLoggedIn = false;
      this.Rol = "usuarioNoLogeado"
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
