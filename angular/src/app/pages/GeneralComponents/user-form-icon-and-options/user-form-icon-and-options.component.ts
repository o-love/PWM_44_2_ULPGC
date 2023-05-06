import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/User/user.model";
import {UserService} from "../../../services/user/user.service";
import {AuthService} from "../../../services/auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-form-icon-and-options',
  templateUrl: './user-form-icon-and-options.component.html',
  styleUrls: ['./user-form-icon-and-options.component.sass'],
  host:{
    class:"m-0 h-100 text-center"
  }
})
export class UserFormIconAndOptionsComponent implements OnInit {
  user: User | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute, private authService: AuthService, private router: Router) {
  }


  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(
      (user) => {
        this.user = user;
        console.log("userLogged: ", this.user)
      }
    );
  }

  logOut() {
    this.authService.logout()
    this.router.navigate(["/"])
  }

  deleteUser(){
    console.log("usuario desde profileview: ", this.user)
    this.userService.deleteUser(this.user!)
  }
}


