import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/User/user.model";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.sass'],
  host: {
    class: "m-0"
  }
})
export class DataUserComponent implements OnInit {
  title = "dataUser";
  numeroCoches: number = 5;
  numeroRepostajes: number = 100;
  numeroReparaciones: number = 20;
  @Input() user: User | undefined;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((user) => {
      this.user = user;
    })
  }

}
