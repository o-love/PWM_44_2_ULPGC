import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {CarModel} from "../../models/Car/car.model";
import {FirestoreService} from "../firestore/firestore.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(protected http: HttpClient, private service: FirestoreService, private storage: AngularFireStorage) { }
  private collection = "cars"
  getCars() : Observable<CarModel[]> {
    return this.getAllCars();
  }

  storeCar(car: CarModel) : Observable<CarModel> {
    return of({ id: "",
      matricula: "", marca: "", modelo: "", combustible: "",
      aceite_motor: "", aceite_direccion: "", agua_radiador: "",
      agua_parabrisas: "", liquido_frenos: "", valculina_caja_cambios: "",
      valvulina_diferencial: "", agua_bateria: "", filtro_aceite: "",
      filtro_aire: "", filtro_combustible: "", presion_neumaticos: "",
      correo_distribucion: "", correa_altenador: "", limpieza_bujias: "",
      cambio_bujias: "", impuesto_circulacion: "", seguro_coche: "",
      revision_itv: "", foto_coche_src: ""
    });

  }

  storeCarImage(file: File) : Observable<string> {
    const path = `car-icon/${Math.random().toString(36).substring(2)}.${file.type}`;
    const storageRef = this.storage.ref(path);

    storageRef.put(file);
    return storageRef.getDownloadURL();
  }

  getAllCars(){
    return this.service.getAllDocs(this.collection);
  }
}
