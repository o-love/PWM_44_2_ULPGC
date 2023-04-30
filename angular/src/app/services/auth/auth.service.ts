import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
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

  checkLoginFromJSON(userEmail: string, userPassword: string): boolean {

    // @ts-ignore
    let userLoged = data.users.find(user => user.email === userEmail && user.password === userPassword)
    if(userLoged!==null){
      localStorage.setItem("userLoged",JSON.stringify(userLoged))
      return true;
    }
    return false;
  }

  // async loginFirebaseAuth(userEmail: string, userPassword: string){
  //   signInWithEmailAndPassword(auth,userEmail,userPassword)
  //     .then(userCredential => {
  //       console.log(userCredential)
  //       localStorage.setItem("userLoged",JSON.stringify(userCredential.user))
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode);
  //       console.log(errorMessage);
  //     });
  // }
  async login(userEmail: string, userPassword: string) {
    // if(this.checkLoginFromJSON(userEmail,userPassword)){
    //   this.loggedIn.next(true);
    // }
    const res = await this.checkLoginFromJSON(userEmail,userPassword)
    return res;

  }

  logout(): void {
    //auth.signOut()
    localStorage.removeItem("userLoged")
    console.log("saliendo")
    this.loggedIn.next(false); // cambia el valor del BehaviorSubject y notifica a sus suscriptores
  }
}
