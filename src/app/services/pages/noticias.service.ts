import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Noticia, ItemArchivo } from '../../interfaces/noticias.interface';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class NoticiasService {
noticiaCollection: AngularFirestoreCollection<Noticia>;
noticiaDoc: AngularFirestoreDocument<Noticia>;
noticias: Observable<Noticia[]>;
noticia: Observable<Noticia>;

private firebasestorage: any;

private carpetaImgNoticia = 'imgs_noticias';




 constructor(
    private afs: AngularFirestore
   ) {
     this.noticiaCollection = this.afs.collection('noticias', ref => ref);
   }
  // imagen
  cargaImagenFirebase( imagen: ItemArchivo) {
  }
  // metodos

  getAllNoticias(): Observable<Noticia[]> {
    this.noticias = this.noticiaCollection.snapshotChanges()
    .map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Noticia;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.noticias;
  }

  addNewNoticia(noticia: Noticia, imagen: ItemArchivo) {
    const metadata = {
      contentType: 'image/jpeg',
    };
    const storageRef = firebase.storage().ref();
    storageRef.child(`${ this.carpetaImgNoticia }/${ imagen.name }`)
    .put( imagen, metadata ).then(
      snapshot => {
        noticia.img_portada = snapshot.downloadURL;
        this.afs.collection('noticias').add(noticia);
        this.afs.collection(`/${this.carpetaImgNoticia}/${ imagen.$key }`)
          .add(imagen);
      }
    );
  }

  updateNoticia(noticia: Noticia, imagen: ItemArchivo) {
    if ( imagen !== undefined && imagen != null ) {
      this.noticiaDoc = this.afs.doc(`noticias/${ noticia.id }`);
      const storageRef = firebase.storage().ref();
      storageRef.child(`${ this.carpetaImgNoticia }/${ imagen.name }`).put(imagen).then(
        snapshot => {
          noticia.img_portada = snapshot.downloadURL;
          this.noticiaDoc.update(noticia);
        });
    } else {
      this.noticiaDoc.update(noticia);
    }
  }

  getOneNoticia(idNoticia: string) {
    this.noticiaDoc = this.afs.doc<Noticia>(`noticias/${ idNoticia }`);
    this.noticia = this.noticiaDoc.snapshotChanges().map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Noticia;
        data.id = action.payload.id;
        return data;
      }
    });
    return this.noticia;
  }



  deleteNoticia(noticia: Noticia) {
    this.noticiaDoc = this.afs.doc(`noticias/${noticia.id}`);
    this.noticiaDoc.delete();
  }
}
