import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../models/User/user.model";
import {UserService} from "../../services/user/user.service";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrls: ['./user-profile-view.component.sass'],
  host: {
    id: "mainContent",
    class: "hideOnMobile h-100 w-100"
  }
})
export class UserProfileViewComponent {

  user: User | undefined;

  constructor(private route: ActivatedRoute, private userService: UserService, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((user) => {
      this.user = user;
    })
  }


}
