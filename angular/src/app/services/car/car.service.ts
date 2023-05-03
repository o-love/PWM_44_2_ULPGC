import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, map, Observable, of} from "rxjs";
import {CarModel} from "../../models/Car/car.model";
import {FirestoreService} from "../firestore/firestore.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(protected http: HttpClient, private service: FirestoreService) { }
  private collection = "cars"
  getCars() : Observable<CarModel[]> {
    return this.getAllCars();
  }

  storeCar(car: CarModel) : Observable<CarModel> {
    const promise: Promise<any> = this.service.createDoc(this.collection, car);
    return from(promise).pipe(map((res) => {
      car.id = res.id;
      return car;
    }))
  }

  storeCarImage(file: File) : Observable<string> {
    /*
    const path = `car-icon/${Math.random().toString(36).substring(2)}.${file.type}`;
    const storageRef = this.storage.ref(path);

    storageRef.put(file);

    return storageRef.getDownloadURL();
     */
    return of("faliure")
  }

  getAllCars(){
    return this.service.getAllDocs(this.collection);
  }
}
