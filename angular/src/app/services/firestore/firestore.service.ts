import {Injectable} from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, where, query, getDocs, getDoc
} from '@angular/fire/firestore';
import {Observable} from "rxjs";
import {User} from "../../models/User/user.model";
import {CarModel} from "../../models/Car/car.model";
import {db} from "../../firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) {
  }

  getAllDocs(coll: string) {
    const usersRef = collection(this.firestore, coll)
    return collectionData(usersRef, {idField: 'id'}) as Observable<any>
  }

  createDoc(coll: string, data: {}) {
    const collRef = collection(this.firestore, coll)
    return addDoc(collRef, data);
  }

  deleteDoc(coll: string, docId: string) {
    const collRef = doc(this.firestore, coll, docId)
    return deleteDoc(collRef);
  }

  updateDoc(coll: string, data: {}) {
    const collRef = doc(this.firestore, coll)
    return updateDoc(collRef, data);
  }

  createDocWithId(coll: string, data: { is_admin: boolean; photo_url: string; username: string }, id: string) {
    const collRef = doc(this.firestore, coll, id)
    return setDoc(collRef, data)
  }

  getDocById(coll: string) {
    const docRef = doc(this.firestore, coll)
    return docData(docRef, {idField: 'id'})
  }

  async getDocsByFielduserId(userId: string, coleccion: string) {
    const q = query(collection(this.firestore, coleccion), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());;
  }


  async getDocByIdSnapshot(coll: string){
    const docRef = doc(this.firestore, coll);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data()
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      return undefined
    }
  }
}
