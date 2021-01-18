import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from "../services/user";
import  'firebase/app';
import { auth } from 'firebaseui';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  userData: any; // usuario logueado

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone //Esto que es?
  ) {
    //AuthState da un booleano si esta autenticado¿?
    //Esto es para guardar el usuario si se ha logueado
    this.afAuth.authState.subscribe(usuario => {
      if (usuario) {
        this.userData = usuario;
        localStorage.setItem('usuario', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('usuario'));
      } else {
        localStorage.setItem('usuario', null);
        JSON.parse(localStorage.getItem('usuario'));
      }
    });
  }

  login(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        alert(error.message);
      });
  }

  registrarse(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        alert(error.message)
      });
  }

  SendVerificationMail() {
    return this.afAuth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['verificar-email']);
      });
  }

  ForgotPassword(emailRecuperacion) {
    return this.afAuth.sendPasswordResetEmail(emailRecuperacion)
      .then(() => {
        alert('Correo de recuperacion enviado');
      }).catch((error) => {
        alert(error.message);
      });
  }
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`usuario/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    });
  }
  get logueado(): boolean {
    const user = JSON.parse(localStorage.getItem('usuario'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
        this.SetUserData(result.user);
      }).catch((error) => {
        alert(error)
      });
  }

  // GoogleAuth(){
  //   return this.AuthLogin(new )
  // }



}
