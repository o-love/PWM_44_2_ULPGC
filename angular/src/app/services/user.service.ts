import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('./assets/json/users.json')
  }
}
