import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from "../../models/User/user.model";

import data from '../../../assets/json/users.json'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // se inicializa con falso

  constructor() {
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable(); // convierte el loggedIn a un Observable para poder suscribirse
  }

  checkLoginFromJSON(userEmail: String, userPassword: String): boolean {

    // @ts-ignore
    let userLoged = data.users.find(user => user.email === userEmail && user.password === userPassword)
    if(userLoged!==null){
      localStorage.setItem("userLoged",JSON.stringify(userLoged))
      return true;
    }
    return false;
  }

  login(userEmail: String, userPassword: String): void {
    if(this.checkLoginFromJSON(userEmail,userPassword)){
      this.loggedIn.next(true);
    }
  }

  logout(): void {
    localStorage.removeItem("userLoged")
    console.log("saliendo")
    this.loggedIn.next(false); // cambia el valor del BehaviorSubject y notifica a sus suscriptores
  }
}
