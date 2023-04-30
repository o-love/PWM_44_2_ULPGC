import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/User/user.model";
import {of} from "rxjs";
import {FirestoreService} from "../firestore/firestore.service";
// @ts-ignore
import data from '../../../assets/json/users.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private collection = "users"
  constructor(protected http: HttpClient, private firestoreService: FirestoreService) {
  }

  getUsers(): Observable<User[]> {
    return of(data.users)
  }

  getUserById(userId: number): Observable<User|undefined>{
    const users: User | undefined = data.users.find(user => user.id == userId);
    return of(users);
  }

  getAllUsers(){
    return this.firestoreService.getAllDocs(this.collection);
  }
}
