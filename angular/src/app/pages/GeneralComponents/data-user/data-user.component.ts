import { Component } from '@angular/core';
import {User} from "../../../models/User/user.model";
import {UserService} from "../../../services/user/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.sass'],
  host:{
    class:"m-0"
  }
})
export class DataUserComponent {
  title = "dataUser";
  numeroCoches: number=5;
  numeroRepostajes: number=100;
  numeroReparaciones: number=20;
  user: User | null | undefined;
  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const userId: string = this.route.snapshot.params['number'];
    console.log(typeof(userId));
    this.userService.getUserById(userId).subscribe((user:any) => {
      this.user = user ?? undefined;
    });
  }

}
