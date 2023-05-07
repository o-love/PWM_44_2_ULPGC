import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, Observable, ObservedValueOf} from "rxjs";
import {Pumping} from "../../models/Car/pumping";
import {FirestoreService} from "../firestore/firestore.service";
import {AuthService} from "../auth/auth.service";
import {StorageService} from "../storage/storage.service";
import {DocumentReference} from "@angular/fire/firestore";
import {CarService} from "../car/car.service";
import {CarModel} from "../../models/Car/car.model";

@Injectable({
  providedIn: 'root'
})
export class PumpingService {
  private collectionDoc = "pumping"

  constructor(protected http: HttpClient, private carService: CarService) {

  }

  createPumping(pumping: Pumping, car: CarModel) {

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
      fecha: fechaActual.toLocaleDateString("es-ES").toString(),
    };

      console.log("adding", car);
      (<CarModel> car).pumpings.push(data);
      return this.carService.update(<CarModel>car);
  }
}
