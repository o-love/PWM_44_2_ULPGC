import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FirestoreService} from "../firestore/firestore.service";
import {ReparationModel} from "../../models/Reparation/reparation.model";
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReparationService {
    private collectionDoc = "reparation"

  constructor(protected http: HttpClient, private firestoreService: FirestoreService) {
  }

  createReparation(reparation: ReparationModel, userId: string) {
    const precio = parseFloat(reparation.precio);
    if (isNaN(precio) || precio < 0) {
      throw new Error("La reparación no es válida");
    }

    const fechaActual = new Date();
    const data: ReparationModel = {
      articuladoReparado: reparation.articuladoReparado,
      precio: reparation.precio,
      fecha: reparation.fecha,
      taller: reparation.taller,
      userId: userId
    };
    return from(this.firestoreService.createDoc(this.collectionDoc, data));
  }
}

