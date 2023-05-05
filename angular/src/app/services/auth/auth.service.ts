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
      console.log("inice sesion")
      if (response !== null){
        this.prueba(response.email!,response.uid)
      }else{
        this.userLogged = undefined
      }

      this.loggedIn.next(true)
    })
    console.log("this.userLogged en authService: ", this.auth.currentUser)
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // convierte el loggedIn a un Observable para poder suscribirse
  }

  async login(userEmail: string, userPassword: string, coll: string) {
    await this.auth.setPersistence(browserSessionPersistence)
    const userCredentials = await signInWithEmailAndPassword(this.auth, userEmail, userPassword)
    this.prueba(userCredentials.user.email!, userCredentials.user.uid)
  }
  private prueba(email:string,id:string){
    const docObservale = this.firestoreService.getDocById(`users/${id}`)
    docObservale.subscribe((data: any) => {
      this.setUser(email!, id, data)
      this.loggedIn.next(true)
    })
  }
  async logout() {
    await signOut(this.auth)
    this.userLogged = undefined
    localStorage.removeItem("userLoged")
    console.log("saliendo")
    this.loggedIn.next(false)
  }

  async createUser(userEmail: string, userPassword: string) {
    return createUserWithEmailAndPassword(this.auth, userEmail, userPassword)
  }

  getUser(): User | undefined {
    return this.userLogged
  }

  private setUser(email: string, id: string, data: any) {
    console.log("setUser data: ", data)
    this.userLogged = {
      id: id,
      username: data.username,
      email: email,
      is_admin: data.is_admin,
      photo_url: data.photo_url
    }
  }
}
