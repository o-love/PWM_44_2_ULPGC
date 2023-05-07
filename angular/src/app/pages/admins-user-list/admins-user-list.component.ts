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
        this.users = userList;
      }
    )
  }
  openUserPage(user: string) {
    this.router.navigate(['userProfile', {id: user}]);
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user).then();
    this.users.splice(this.users.indexOf(user), 1);
    console.log("removed", user.username)
  }

  stopPropagation(event: Event){
    event.stopPropagation();
  }
}
