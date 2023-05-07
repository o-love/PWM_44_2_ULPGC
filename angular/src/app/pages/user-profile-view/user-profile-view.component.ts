import { Component } from '@angular/core';
import { UserFormIconAndOptionsComponent} from "./user-form-icon-and-options/user-form-icon-and-options.component";
import {DataUserComponent} from "./data-user/data-user.component";

@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrls: ['./user-profile-view.component.sass'],
  host:{
    id:"mainContent",
    class:"hideOnMobile h-100 w-100"
  }
})
export class UserProfileViewComponent {

}
