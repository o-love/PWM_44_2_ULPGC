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
import {db} from '../../firebase/firestore';
import {setDoc, doc, query, deleteDoc, where, getDocs, collection} from 'firebase/firestore';
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private collectionDoc = "users"

  constructor(protected http: HttpClient, private firestoreService: FirestoreService, private authService: AuthService) {
  }

  getUsers(): Observable<User[]> {
    return this.firestoreService.getAllDocs(this.collectionDoc);
  }

  getUserById(userId: string) {
    return this.firestoreService.getDocById(this.collectionDoc+`/${userId}`);
  }

  async createUser(user: User, userPassword: string) {
    console.log("user: ", user)
    const userCredentials = await this.authService.createUser(user.email,userPassword)
    if (userCredentials !== null){
      return this.firestoreService.createDocWithId(this.collectionDoc, {username:user.username, photo_url:user.photo_url, is_admin:user.is_admin},userCredentials.user.uid)
    }
    return true
    //return this.firestoreService.createDoc(this.collectionDoc, user);
  }

  async deleteUser(user: User) {
    return this.firestoreService.deleteDoc(this.collectionDoc, user.id)
  }

  editUser(user: User) {
    return this.firestoreService.updateDoc(this.collectionDoc, user.id)
  }


  logUser(userEmail: string, userPassword: string){
    return this.authService.login(userEmail,userPassword,this.collectionDoc)
  }
}
