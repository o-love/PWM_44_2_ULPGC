import { Component } from '@angular/core';
import {User} from "../../models/User/user.model";
import {UserService} from "../../services/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-profile-update',
  templateUrl: './user-profile-update.component.html',
  styleUrls: ['./user-profile-update.component.sass'],
  host: {
    id: "mainContent",
    class: "flex-grow-1 d-sm-flex justify-content-sm-center hideOnMobile"
  }
})
export class UserProfileUpdateComponent {
  user: User | undefined;
  file: File | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.userService.getUserById(this.route.snapshot.params["userId"]).subscribe((user) => {
      this.user = <User>user;
    });
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  updateUser() {
    this.userService.editUser(this.user!).then(() => {
      if (this.file){
        this.userService.storeUserImage(this.file, this.user?.id!).subscribe((obs) => {
          obs.subscribe(() => {
            this.router.navigate(['/userProfile', {userId: this.user?.id}]);
          })
        });
      }
      else {
        this.router.navigate(['/userProfile', {userId: this.user?.id}]);
      }
    })
  }
}
