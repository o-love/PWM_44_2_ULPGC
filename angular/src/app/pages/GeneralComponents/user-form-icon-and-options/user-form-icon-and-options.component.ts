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
  user: User | null | undefined;
  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const userId: number = this.route.snapshot.params['number'];
    console.log(typeof(userId));

    this.userService.getUserById(userId).subscribe((user: User | undefined) => {
      this.user = user ?? undefined;
    });
  }
}


