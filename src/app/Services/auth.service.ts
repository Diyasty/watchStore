import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  User: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.User = afAuth.user;
  }

  signUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  logIN(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  logOut() {
    return this.afAuth.auth.signOut();
  }
}
