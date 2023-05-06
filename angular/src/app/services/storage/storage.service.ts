import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FileUpload} from "../../models/File/fileUpload";
import {finalize, Observable} from "rxjs";
import {getDownloadURL} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private basePath: string = ""

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {
  }

  pushFileToStorage(fileUpload: FileUpload, id: string): Observable<number | undefined> {
    if (fileUpload.type === "car") {
      this.basePath = "/cars/"
    } else {
      this.basePath = "/users/"
    }
    const type = fileUpload.file.type
    const renamedFile = new File([fileUpload.file],id,{type})
    console.log(renamedFile)
    fileUpload.file = renamedFile
    const filePath = this.basePath + `${fileUpload.name}`;
    const storageRef = this.storage.ref(filePath)
    const uploadTask = this.storage.upload(filePath, fileUpload.file)
    console.log("subiendo archivo:")
    uploadTask.snapshotChanges().pipe(finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        fileUpload.url = downloadURL
        fileUpload.name = fileUpload.file.name
        this.saveFileData(fileUpload)
      });
    })).subscribe();
    return uploadTask.percentageChanges();
  }

  getFiles(numFiles: number, path: string): AngularFireList<FileUpload> {
    return this.db.list(path, ref =>
      ref.limitToLast(numFiles)
    )
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
