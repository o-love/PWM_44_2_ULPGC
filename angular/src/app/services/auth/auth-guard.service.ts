import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  authState = new BehaviorSubject(false);
  constructor(private authService: AuthService) { }
}
