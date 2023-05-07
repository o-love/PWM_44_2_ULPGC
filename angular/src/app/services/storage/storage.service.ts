import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FileUpload} from "../../models/File/fileUpload";
import {finalize, from, Observable} from "rxjs";
import {getDownloadURL} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private basePath: string = ""

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {
  }

  pushFileToStorage(fileUpload: FileUpload, id: string): Observable<any> {
    if (fileUpload.type === "car") {
      this.basePath = "/cars/"
    } else {
      this.basePath = "/users/"
    }
    console.log("id: ", id)
    const renamedFile = new File([fileUpload.file], "" + id, {type: fileUpload.file.type})
    console.log(renamedFile)
    const newFileUpload = new FileUpload(renamedFile)
    console.log("FILE UPLOAD NAME: ", fileUpload)

    const filePath = this.basePath + `${newFileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath)
    const uploadTask = this.storage.upload(filePath, newFileUpload.file)
    console.log("subiendo archivo:")

    uploadTask.percentageChanges().subscribe(porcentage => {
        console.log("porcentaje de subida: ", porcentage)
      },
      error => {
        console.log(error);
      }
    );

    uploadTask.snapshotChanges().pipe(finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        fileUpload.url = downloadURL
        fileUpload.name = fileUpload.file.name
        this.saveFileData(fileUpload)
      });
    })).subscribe();

    return from(uploadTask.then(() => {
      return storageRef.getDownloadURL()
    }))
  }

  getFiles(numFiles: number, path: string): AngularFireList<FileUpload> {
    return this.db.list(path, ref =>
      ref.limitToLast(numFiles)
    )
  }

  getUserImageUrl(uid: string, field: string): Observable<string> {
    const ref = this.storage.ref(`${field}/${uid}`);
    return ref.getDownloadURL();
  }

  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error))
  }

  private saveFileData(fileUpload: FileUpload) {
    this.db.list(this.basePath).push(fileUpload)
  }

  private deleteFileDatabase(key: string) {
    return this.db.list(this.basePath).remove(key)
  }

  private deleteFileStorage(name: string) {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}
