import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, Observable, ObservedValueOf} from "rxjs";
import {Pumping} from "../../models/Pumping/pumping";
import {FirestoreService} from "../firestore/firestore.service";
import {AuthService} from "../auth/auth.service";
import {StorageService} from "../storage/storage.service";
import {DocumentReference} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class PumpingService {
  private collectionDoc = "pumping"

  constructor(protected http: HttpClient, private firestoreService: FirestoreService) {
  }

  createPumping(pumping: Pumping, userId: string) {

    const precioCombustible = pumping.precioCombustible ? parseFloat(pumping.precioCombustible) : 0;
    const kmActual = parseFloat(pumping.kmActual);
    const precioTotal = parseFloat(pumping.precioTotal);

    if (isNaN(precioCombustible) || precioCombustible < 0 ||
      isNaN(kmActual) || kmActual < 0 ||
      isNaN(precioTotal) || precioTotal < 0) {
      throw new Error("La recarga no es valida");
    }
    const fechaActual = new Date();
    const data: Pumping = {
      precioCombustible: pumping.precioCombustible,
      kmActual: pumping.kmActual,
      precioTotal: pumping.precioTotal,
      userId: userId,
      fecha: fechaActual.toLocaleDateString("es-ES").toString(),
    };

    return from(this.firestoreService.createDoc(this.collectionDoc, data));
  }

  async getAllPumpingsOfUser(userId: string){
      return this.firestoreService.getDocsByFieldUserId(userId, this.collectionDoc)
  }
}
