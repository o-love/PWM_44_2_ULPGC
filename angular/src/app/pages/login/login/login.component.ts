import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {Observable} from "rxjs";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  host:{
    id:"mainContent",
    class:"flex-grow-1 d-sm-flex justify-content-sm-center hideOnMobile"
  }
})
export class LoginComponent {
  Name: string = '';
  Password:String ='';

  constructor(private authService: AuthService) {
  }

  login(): void {
    this.authService.login(this.Name,this.Password);
    console.log("login")
  }

}
