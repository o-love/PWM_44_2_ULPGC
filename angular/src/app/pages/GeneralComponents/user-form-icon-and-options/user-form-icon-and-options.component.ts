import {Component, OnInit} from '@angular/core';
import { User} from "../../../models/User/user.model";
import {UserService} from "../../../services/user/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-form-icon-and-options',
  templateUrl: './user-form-icon-and-options.component.html',
  styleUrls: ['./user-form-icon-and-options.component.sass']
})
export class UserFormIconAndOptionsComponent implements OnInit{
  user: User | undefined;
  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void{
    const paramMap = this.route.snapshot.paramMap;
    const id = paramMap.get('id');
    const username = paramMap.get('username');
    const email = paramMap.get('email');
    const password = paramMap.get('password');
    const isAdmin = paramMap.get('is_admin');
    const photoUrl = paramMap.get('photo_url');
    const user = {id, username, email, password, isAdmin, photoUrl} as unknown as User;
    this.userService.getUserById(user).subscribe((user: User | null) => {
      this.user = user ?? undefined;
    });
  }
}


