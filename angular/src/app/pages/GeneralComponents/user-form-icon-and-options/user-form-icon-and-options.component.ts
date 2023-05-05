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
  user: User | null | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute, private authService: AuthService, private router: Router) {
  }


  ngOnInit(): void {
    const userId: string = this.route.snapshot.params['number'];
    console.log(typeof (userId));

    this.userService.getUserById(userId).subscribe((user:any) => {
      this.user = user ?? undefined;
    });
  }

  logOut() {
    this.authService.logout()
    this.router.navigate(["/"])
  }
}


