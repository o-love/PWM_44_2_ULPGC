import { Component } from '@angular/core';
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
  user:User = {id:"",username:"",email:"",is_admin:false,photo_url:""};
  pass="";
  passConfirm="";
  file: FileUpload | undefined;
  constructor(private userService: UserService, private router: Router, private storage: StorageService) {
  }
  registration(){
    if (this.file!){
      this.storage.pushFileToStorage(this.file,"ChhhG5XVYOZjkXSkuOjY2wtVOlp1")
    }
    if (this.pass === this.passConfirm){

      //this.userService.createUser(this.user,this.pass)
    }
  }

  onFileSelected(event: Event) {
    if (event.target!==null){
      this.file = new FileUpload((<HTMLInputElement>event.target).files![0]);
      this.file.type = "user"

      console.log(this.file)
    }
  }
}
