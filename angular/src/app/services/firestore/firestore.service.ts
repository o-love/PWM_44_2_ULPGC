import {Injectable} from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc } from '@angular/fire/firestore';
import {Observable} from "rxjs";
import {User} from "../../models/User/user.model";
import {CarModel} from "../../models/Car/car.model";
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) {
  }

  getAllDocs(coll: string) {
    const usersRef = collection(this.firestore,coll)
    return collectionData(usersRef,{idField:'id'}) as Observable<any>
  }

  createDoc(coll:string,data:{}){
    const collRef = collection(this.firestore, coll)
    return addDoc(collRef,data);
  }
}
