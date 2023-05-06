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
  profileImageUrl: string | undefined;
  Rol = "";

  private userLogged: User | undefined;

  constructor(private authService: AuthService, private userService: UserService) {
  }



  ngOnInit() {
    this.authService.isLoggedIn.subscribe(
      (user) => {
        this.userLogged = user;
        if(this.userLogged){
          this.getImage(this.userLogged);
        }
        console.log("userLogged: ", this.userLogged)
        if (this.userLogged){
          if (this.userLogged.is_admin){
            this.Rol="Admin"
          }else{
            this.Rol="usuarioLogeado"
          }
        }else{
          this.Rol="usuarioNoLogeado"
        }
      }
    );
  }
  async getImage(user: User) {
    if (user?.id) {
      (await this.userService.getImageUser(user?.id)).subscribe((url) => {
        this.profileImageUrl = url;
        const img = document.getElementById('fotoPerfilHeader') as HTMLImageElement;
        img.src = this.profileImageUrl;
      });
    }
  }
}

