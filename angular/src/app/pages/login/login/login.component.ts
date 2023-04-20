import { Component } from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {Router} from "@angular/router";
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
  constructor(private userService:UserService, private router:Router ) {
  }

  logIn(){

  }
}
