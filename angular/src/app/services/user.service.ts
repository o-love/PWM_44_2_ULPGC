import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {of} from "rxjs";

import data from '../../assets/json/users.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return of(data.users)
  }
}
