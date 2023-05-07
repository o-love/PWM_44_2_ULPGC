import {Component, Input, OnInit} from '@angular/core';
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
  @Input() user: User | undefined;
  profileImageUrl: string | undefined;
  photo="https://firebasestorage.googleapis.com/v0/b/pwm2023-fba58.appspot.com/o/assets%2Fpng-clipart-computer-icons-user-user-icon-face-monochrome-thumbnail.png?alt=media&token=a7bd81cf-9e3a-458b-b30b-d79f1929af68"
  constructor(private userService: UserService, private route: ActivatedRoute, private authService: AuthService, private router: Router) {
  }


  ngOnInit(): void {
    if (this.user?.photo_url!=="" && this.user?.photo_url!==undefined){
      this.photo = this.user?.photo_url
    }
  }



  logOut() {
    this.authService.logout()
    this.router.navigate(["/"])
  }

  deleteUser(){
    console.log("usuario desde profileview: ", this.user)
    this.userService.deleteUser(this.user!)
  }

  toCars() {
    this.router.navigate(["/cardCar", {userId: this.user?.id}])
  }



  editUser() {
    this.router.navigate(['/userProfileEdit', {userId: this.user?.id}]);
  }
}


