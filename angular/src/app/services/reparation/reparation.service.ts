import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FirestoreService} from "../firestore/firestore.service";
import {Reparation} from "../../models/Car/reparation";
import {from} from "rxjs";
import {CarModel} from "../../models/Car/car.model";
import {CarService} from "../car/car.service";

@Injectable({
  providedIn: 'root'
})
export class ReparationService {
    private collectionDoc = "reparation"

  constructor(protected http: HttpClient, private carService: CarService) {
  }

  createReparation(reparation: Reparation, car: CarModel) {
    const precio = parseFloat(reparation.precio);
    if (isNaN(precio) || precio < 0) {
      throw new Error("La reparación no es válida");
    }

    const data: Reparation = {
      articuladoReparado: reparation.articuladoReparado,
      precio: reparation.precio,
      fecha: reparation.fecha,
      taller: reparation.taller,
    };

    car.reparation.push(data);
    console.log(car);
    return this.carService.update(car);
  }
}

