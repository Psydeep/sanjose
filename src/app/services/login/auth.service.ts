import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Rx";

@Injectable()
export class AuthService {


  constructor(
    public afAuth: AngularFireAuth
  ) { }

  
  login(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( userData =>  resolve(userData),
      err => reject (err));
    });
  }

  // login() {
  //   return this.afAuth.auth.signInWithPopup ( new firebase.auth.GoogleAuthProvider());
  // }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }


}
