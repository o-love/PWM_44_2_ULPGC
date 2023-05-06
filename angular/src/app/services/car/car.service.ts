import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, map, Observable, of, skipUntil} from "rxjs";
import {CarModel} from "../../models/Car/car.model";
import {FirestoreService} from "../firestore/firestore.service";
import {StorageService} from "../storage/storage.service";
import {FileUpload} from "../../models/File/fileUpload";
import {AuthService} from "../auth/auth.service";
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(protected http: HttpClient, private firestoreService: FirestoreService, private storageService: StorageService, private authService: AuthService) { }
  private collection = "cars"

  getCars() {
    return this.authService.isLoggedIn.pipe(map(async (res) => {
      if (res) {
        return await this.firestoreService.getDocsByFieldUserId(res.id, this.collection);
      }

      return [];
    }));
  }

  getCarByID(carID: string) {
    return this.firestoreService.getDocById(`${this.collection}/${carID}`);
  }

  async storeCarAsync(car: CarModel) {
    delete car.id;
    const myUser = this.authService.currentUser;
    car.userId = myUser?.id;
    return this.firestoreService.createDoc(this.collection, car);
  }

  storeCar(car: CarModel) : Observable<CarModel> {
    return from(this.storeCarAsync(car)).pipe(map((res) => {
      car.id = res.id;
      return car;
    }))
  }

  storeCarImage(file: File, id:string) : Observable<any> {
    return this.storageService.pushFileToStorage({file: file, key: id, name: file.name, type: "car", url: ""}, `/${this.collection}/${id}`);
  }

  storeCarWithImage(car: CarModel, image: File): Observable<CarModel> {
    return this.storeCar(car).pipe(map((retCar) => {
      this.storeCarImage(image, <string>retCar.id).subscribe((url) => {
        retCar.foto_coche_src = url;
      });
      return retCar;
    }))
  }

  private updateCar(car: CarModel) {
    return this.firestoreService.updateDoc(`${this.collection}/${car.id}`, car);
  }

  private deleteCar(car: CarModel) {
    return this.firestoreService.deleteDoc(this.collection, <string>car.id);
  }
}
