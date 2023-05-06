import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {User} from "../../models/User/user.model";
import {UserService} from "../../services/user/user.service";

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
  isLoggedIn = false;

  Rol = "";

  private userLogged: User | undefined;

  constructor(private authService: AuthService, private userService: UserService) {
  }


  private setUserHeader(){
    this.userLogged = this.authService.getUser()
    if (this.userLogged !== undefined){
      if (this.userLogged.is_admin){
        this.Rol = "Admin"
      }else{
        this.Rol = "usuarioLogeado"
      }
    }else{
      this.Rol  = "usuarioNoLogeado"
    }
  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(
      (loggedIn) => {
        this.isLoggedIn = loggedIn;
        this.setUserHeader()
      }
    );
  }
}
