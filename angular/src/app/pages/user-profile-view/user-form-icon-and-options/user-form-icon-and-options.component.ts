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

  constructor(private userService: UserService, private route: ActivatedRoute, private authService: AuthService, private router: Router) {
  }


  ngOnInit(): void {
    this.getImage();
  }

  ngOnChanges() {
    this.getImage();
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
    this.router.navigate(["/cardCar"])
  }

  async getImage() {
    if (this.user?.id) {
      (await this.userService.getImageUser(this.user?.id)).subscribe((url) => {
        this.profileImageUrl = url;
        const img = document.getElementById('profileImage') as HTMLImageElement;
        img.src = this.profileImageUrl;
      });
    }
  }

  editUser() {
    // TODO: Add router to user form with current data filled
  }
}


