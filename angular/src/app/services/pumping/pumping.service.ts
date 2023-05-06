import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pumping} from "../../models/Pumping/pumping";
import {FirestoreService} from "../firestore/firestore.service";
import {AuthService} from "../auth/auth.service";
import {StorageService} from "../storage/storage.service";

@Injectable({
  providedIn: 'root'
})
export class PumpingService {
  private collectionDoc = "pumping"

  constructor(protected http: HttpClient, private firestoreService: FirestoreService) {
  }
  createPumping(pumping: Pumping) {
    return this.firestoreService.createDoc(this.collectionDoc, {
      precio: pumping.precioCombustible,
      kmActual: pumping.kmActual,
      precioTotal: pumping.precioTotal
    })
  }



}
