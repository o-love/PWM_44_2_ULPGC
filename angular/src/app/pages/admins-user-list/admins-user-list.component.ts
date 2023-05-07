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
  openUserPage(user: string) {
    this.router.navigate(['userProfile', {id: user}]);
  }
}
