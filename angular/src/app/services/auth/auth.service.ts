import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import data from '../../../assets/json/users.json'
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  deleteUser
} from "@angular/fire/auth";

import {User} from "../../models/User/user.model";
import {FirestoreService} from "../firestore/firestore.service";
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLogged = new BehaviorSubject<User | undefined>(undefined);
  currentUser: User | undefined;

  constructor(private auth: Auth, private firestoreService: FirestoreService) {

    onAuthStateChanged(this.auth, response => {
      if (response !== null) {
        this.setUser(response.uid, response.email!)
      } else {
        this.userLogged.next(undefined)
      }
    })
  }

  get isLoggedIn() {
    return this.userLogged.asObservable(); // convierte el loggedIn a un Observable para poder suscribirse
  }

  async login(userEmail: string, userPassword: string, coll: string) {
    const x = await signInWithEmailAndPassword(this.auth, userEmail, userPassword)
    this.setUser(x.user.uid, x.user.email!)
    return x
  }

  async logout() {
    await signOut(this.auth)
    this.currentUser = undefined;
    this.userLogged.next(undefined)
  }

  async createUser(userEmail: string, userPassword: string) {
    return createUserWithEmailAndPassword(this.auth, userEmail, userPassword)
  }

  private async setUser(id: string, email: string) {
    this.firestoreService.getDocByIdSnapshot(`users/${id}`).then(docData => {
      if (docData!=undefined){
        this.currentUser = {
          id: id,
          username: docData!['username'],
          email: email,
          is_admin: docData!['is_admin'],
          photo_url: docData!['photo_url']
        };
        this.userLogged.next(this.currentUser)
        console.log(this.userLogged)
      }else{
        this.userLogged.next(undefined)
      }
    })
  }

  deleteUser(){
    const x = this.auth.currentUser
    deleteUser(x!)
  }
}
