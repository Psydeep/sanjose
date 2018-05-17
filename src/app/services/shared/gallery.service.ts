import { Injectable } from '@angular/core';
import { Gallery } from '../../models/gallery';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GalleryService {

    private Image_Folder = 'gallery';

    constructor(private db: AngularFireDatabase,
        private toastr: ToastrService,) {}
    
    pushGallery(gallery: Gallery[]) {
        const storageRef = firebase.storage().ref();
        for (const item of gallery) {
            item.itsUpload = true;
            if(item.progress >= 100) {
                continue;
            }

            const uploadTask: firebase.storage.UploadTask =
                storageRef.child(`${this.Image_Folder}/${new Date().getTime()}__${item.file.name}`)
                .put(item.file);
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
            (snapshot: firebase.storage.UploadTaskSnapshot) =>
            item.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
            (error) => console.error('error al subir', error),
            () => {
                console.log('Imagen cargada correctamente');
                item.url = uploadTask.snapshot.downloadURL;
                item.name = item.file.name;
                item.createdAt = (new Date()).getTime();
                item.itsUpload = false;
                this.saveFileData({
                    name: item.name,
                    url: item.url,
                    fecha: item.createdAt
                });
                this.toastr.success('Archivo/s subidos exitosamente','Galeria de imagenes (portada)');
            });
        }
    }

    // escribir el archivo detalle para el realtime db
    private saveFileData(gallery: {name:string, url: string, fecha:any}) {
        this.db.list(`${this.Image_Folder}/`).push(gallery);
    }
}