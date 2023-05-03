import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/User/user.model";
import {of} from "rxjs";
import {FirestoreService} from "../firestore/firestore.service";
// @ts-ignore
import data from '../../../assets/json/users.json';
import {getStorage} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private collection = "users"
  constructor(protected http: HttpClient, private firestoreService: FirestoreService) {
  }

  getUsers(): Observable<User[]> {
    return this.firestoreService.getAllDocs(this.collection);
  }

  getUserById(userId: string): Observable<User|undefined>{
    return of({email: "pwkoadkpo@test.test", id: "awd9", is_admin: false, photo_url: "", username: "test user"});
  }
}
