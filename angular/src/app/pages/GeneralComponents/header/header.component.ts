import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {User} from "../../../models/User/user.model";
import {UserService} from "../../../services/user/user.service";

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
  profileImageUrl: string | undefined;
  Rol = "";
  photo = "https://firebasestorage.googleapis.com/v0/b/pwm2023-fba58.appspot.com/o/assets%2Fpng-clipart-computer-icons-user-user-icon-face-monochrome-thumbnail.png?alt=media&token=a7bd81cf-9e3a-458b-b30b-d79f1929af68";
  private userLogged: User | undefined;

  constructor(private authService: AuthService, private userService: UserService) {
  }


  ngOnInit() {
    this.authService.isLoggedIn.subscribe(
      (user) => {
        this.userLogged = user;
        console.log("userLogged: ", this.userLogged)
        if (this.userLogged) {
          if (this.userLogged.photo_url !== "") {
            this.photo = this.userLogged.photo_url
          } else {
            this.photo = "https://firebasestorage.googleapis.com/v0/b/pwm2023-fba58.appspot.com/o/assets%2Fpng-clipart-computer-icons-user-user-icon-face-monochrome-thumbnail.png?alt=media&token=a7bd81cf-9e3a-458b-b30b-d79f1929af68"
          }
          if (this.userLogged.is_admin) {
            this.Rol = "Admin"
          } else {
            this.Rol = "usuarioLogeado"
          }
        } else {
          this.photo = "https://firebasestorage.googleapis.com/v0/b/pwm2023-fba58.appspot.com/o/assets%2Fpng-clipart-computer-icons-user-user-icon-face-monochrome-thumbnail.png?alt=media&token=a7bd81cf-9e3a-458b-b30b-d79f1929af68"
          this.Rol = "usuarioNoLogeado"
        }
      }
    );
  }
}

