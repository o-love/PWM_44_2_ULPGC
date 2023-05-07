import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/User/user.model";
import {FirestoreService} from "../firestore/firestore.service";
import {AuthService} from "../auth/auth.service";
import {FileUpload} from "../../models/File/fileUpload";
import {StorageService} from "../storage/storage.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private collectionDoc = "users"


  constructor(protected http: HttpClient, private firestoreService: FirestoreService, private authService: AuthService, private storageService: StorageService) {
  }

  getUsers(): Observable<User[]> {
    return this.firestoreService.getAllDocs(this.collectionDoc);
  }

  getUserById(userId: string) {
    return this.firestoreService.getDocById(this.collectionDoc + `/${userId}`);
  }

  async createUser(user: User, userPassword: string, fileUpload: FileUpload | undefined) {
    const userCredentials = await this.authService.createUser(user.email, userPassword)
    user.id = userCredentials.user.uid
    console.log("user actualizado con datos de auth: ",user)
    await this.firestoreService.createDocWithId(`users`, {
      is_admin: user.is_admin,
      photo_url: "",
      username: user.username
    }, user.id)
    this.authService.logout();
    if (fileUpload !== undefined) {
      this.storeUserImage(fileUpload.file, user.id).subscribe((urlListener) => {
        urlListener.subscribe((url: string)=>{
          user.photo_url = url
          console.log("url de la foto: ", user.photo_url)
          this.editUser(user)
        })
      })
    }
  }


  storeUserImage(file: File, id: string) {
    return this.storageService.pushFileToStorage({
      file: file,
      key: id,
      name: file.name,
      type: "user",
      url: ""
    }, id);
  }

  async getImageUser(uid: string) {
    return this.storageService.getUserImageUrl(uid, this.collectionDoc);
  }

  async deleteUser(user: User) {
    const x = this.storageService.getFiles(1, `/users/${user.id}`);
    console.log("ficheros: ", x)
    await this.authService.logout();

    //this.storageService.deleteFile(x)
    return this.firestoreService.deleteDoc(this.collectionDoc, user.id);
  }

  editUser(user: User) {
    return this.firestoreService.updateDoc(`${this.collectionDoc}/${user.id}`, user);
  }


  logUser(userEmail: string, userPassword: string) {
    return this.authService.login(userEmail, userPassword, this.collectionDoc);
  }
}
