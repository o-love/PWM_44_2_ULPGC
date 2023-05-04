import { Component } from '@angular/core';
import {AuthService} from "../../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {User} from "../../../../models/User/user.model";
import {UserService} from "../../../../services/user/user.service";
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
  user:User = {id:"",username:"",email:"",is_admin:false,photo_url:""};
  pass="";
  passConfirm="";
  constructor(private userService: UserService, private router: Router) {
  }
  registration(){
    if (this.pass === this.passConfirm){
      this.userService.createUser(this.user,this.pass)


      // @ts-ignore
      // TODO: FIX AUTH SERVICE CREATE USER
      // this.authService.createUser(this.user.email,this.pass)
      //   .then(response => {
      //     console.log(response)
      //     this.router.navigate(["/userInfo"])
      //   })
    }
  }
}
