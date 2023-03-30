import { Component } from '@angular/core';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-admins-user-list',
  templateUrl: './admins-user-list.component.html',
  styleUrls: ['./admins-user-list.component.sass']
})
export class AdminsUserListComponent {
  users: User[] = [];

  constructor(private userService: UserService) {
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (userList: User[]) => {
        this.users = [...this.users, ...userList];
      }
    )
  }
}
