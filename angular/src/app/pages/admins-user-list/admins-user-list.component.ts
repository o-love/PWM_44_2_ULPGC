import { Component } from '@angular/core';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-admins-user-list',
  templateUrl: './admins-user-list.component.html',
  styleUrls: ['./admins-user-list.component.css']
})
export class AdminsUserListComponent {
  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (userList: User[]) => {
        console.log(userList);
        this.users = [...this.users, ...userList];
      }
    )
  }
}
