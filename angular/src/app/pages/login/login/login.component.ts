import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {Observable} from "rxjs";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  host: {
    id: "mainContent",
    class: "flex-grow-1 d-sm-flex justify-content-sm-center hideOnMobile"
  }
})
export class LoginComponent {
  Email: string = '';
  Password: string = '';

  constructor(private userService: UserService, private router: Router) {
  }

  login() {
    //this.authService.login(this.Name, this.Password)
    this.userService.logUser(this.Email,this.Password)
      .then(res => {
        console.log("login: ", res)
        this.router.navigate(["/userProfile"])
      })
      .catch(error =>{
        console.log(error)
      })
  }
}
