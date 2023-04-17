import {Component} from '@angular/core';
import {User} from "../../models/User/user.model";
import {UserService} from "../../services/user/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-admins-user-list',
  templateUrl: './admins-user-list.component.html',
  styleUrls: ['./admins-user-list.component.sass']
})
export class AdminsUserListComponent {
  searchText: string = '';
  users: User[] = [];
  userSelected: User | null | undefined;
  constructor(private userService: UserService, private router: Router) {
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
  getUserId(user: User) {
    this.userService.getUserById(user).subscribe(
      (user: User | null) => {
        this.userSelected = user;
        let userSelect= this.userSelected?.id
        this.router.navigate(['userInfo', this.userSelected]);
      }
    );
  }
}
