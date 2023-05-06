import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import data from '../../../assets/json/users.json'
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  browserSessionPersistence
} from "@angular/fire/auth";

import {User} from "../../models/User/user.model";
import {FirestoreService} from "../firestore/firestore.service";
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // se inicializa con falso

  private userLogged: User | undefined

  constructor(private auth: Auth, private firestoreService: FirestoreService) {

    onAuthStateChanged(this.auth, async response => {

      if (response !== null) {
        let docObservale = this.firestoreService.getDocById(`users/${response.uid}`)
        docObservale.subscribe((data: any) => {
          this.setUser(response.email!, response.uid, data)
        })
        this.loggedIn.next(true)
      } else {
        this.userLogged = undefined
        this.loggedIn.next(false)
      }

    })
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // convierte el loggedIn a un Observable para poder suscribirse
  }

  async login(userEmail: string, userPassword: string, coll: string) {
    return await signInWithEmailAndPassword(this.auth, userEmail, userPassword)
  }

  async logout() {
    await signOut(this.auth)
    this.userLogged = undefined
  }

  async createUser(userEmail: string, userPassword: string) {
    return createUserWithEmailAndPassword(this.auth, userEmail, userPassword)
  }

  getUser(): User | undefined {
    return this.userLogged
  }

  private setUser(email: string, id: string, data: any) {
    this.userLogged = {
      id: id,
      username: data.username,
      email: email,
      is_admin: data.is_admin,
      photo_url: data.photo_url
    }
  }
}
