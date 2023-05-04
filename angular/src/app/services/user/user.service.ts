import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/User/user.model";
import {of} from "rxjs";
import {FirestoreService} from "../firestore/firestore.service";
// @ts-ignore
import data from '../../../assets/json/users.json';
import {getStorage} from "@angular/fire/storage";
import {createUserWithEmailAndPassword} from "@angular/fire/auth";
import  {db} from '../../firebase/firestore';
import { setDoc, doc,query,deleteDoc, where, getDocs, collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private collectionDoc = "users"
  constructor(protected http: HttpClient, private firestoreService: FirestoreService) {
  }

  getUsers(): Observable<User[]> {
    return this.firestoreService.getAllDocs(this.collectionDoc);
  }

  getUserById(userId: string): Observable<User|undefined>{
    return of({email: "pwkoadkpo@test.test", id: "awd9", is_admin: false, photo_url: "", username: "test user"});
  }

  createUser(user: User){
    return this.firestoreService.createDoc(this.collectionDoc, user);
  }

  async deleteUser(user: User){
    return this.firestoreService.deleteDoc(this.collectionDoc,user.id)
  }

  editUser(user: User) {
    return this.firestoreService.updateDoc(this.collectionDoc,user.id)
  }
}
