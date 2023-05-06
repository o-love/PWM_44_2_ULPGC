import {Component} from '@angular/core';
import {AuthService} from "../../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {User} from "../../../../models/User/user.model";
import {UserService} from "../../../../services/user/user.service";
import {FileUpload} from "../../../../models/File/fileUpload";
import {StorageService} from "../../../../services/storage/storage.service";

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
  user: User = {id: "", username: "", email: "", is_admin: false, photo_url: ""};
  pass = "";
  passConfirm = "";
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;

  constructor(private userService: UserService, private router: Router) {
  }

  registration() {
    if (this.pass === this.passConfirm) {
      if (this.selectedFiles) {
        const file: File | null = this.selectedFiles.item(0)
        this.selectedFiles = undefined
        if (file) {
          this.currentFileUpload = new FileUpload(file)
          this.currentFileUpload.type ="user"
        }
      }
      this.userService.createUser(this.user, this.pass, this.currentFileUpload)
    }
  }


  onFileSelected(event: Event) {
    this.selectedFiles = (<HTMLInputElement>event.target).files!
  }
}
