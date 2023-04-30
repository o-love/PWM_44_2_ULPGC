import { Component } from '@angular/core';
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.sass'],
  host: {
    id: "mainContent",
    class: "flex-grow-1 d-sm-flex justify-content-sm-center hideOnMobile"
  }
})
export class UserRegistrationComponent {
  user = {username:"",email:"",is_admin:false,photo_url:""};
  pass="";
  passConfirm="";
  constructor(private authService:AuthService) {
  }
  registration(){
    if (this.pass === this.passConfirm){
      this.authService.createUser(this.user.email,this.pass)
        .then(response => {
          console.log(response)
        })
    }
    console.log("usuario => ",this.user)
    console.log("pass => ", this.pass)
    console.log("passConfirm => ", this.passConfirm)
  }
}
