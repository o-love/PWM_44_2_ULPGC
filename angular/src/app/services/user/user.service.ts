import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/User/user.model";
import {of} from "rxjs";

// @ts-ignore
import data from '../../../assets/json/users.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return of(data.users)
  }

  getUserById(userId: number | undefined): Observable<User>{
    let user: User;
    // @ts-ignore
    user = data.users.find(user => user.id === userId);
    console.log(user);
    return of(user);
  }

  userCreated(email:String, pass:String){
    data.users.forEach(user => {
      if (user.email === email && user.password===pass){
        //se guarda en local storage
        console.log("habemus usuario")
      }
    })
  }

  onLoginChange():Observable<User>|null{
    let user: User;

    return null;
  }
}
