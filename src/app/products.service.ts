import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { AuthService } from "./Services/auth.service";
import { Observable } from "rxjs";
import { AngularFireStorage } from "@angular/fire/storage";
import { promise } from "protractor";
import { resolve } from "url";
interface data {
  title?: string;
  price?: number;
  image?: File;
}
@Injectable({
  providedIn: "root",
})
export class ProductsService {
  User: any;
  constructor(
    private fs: AngularFirestore,
    private Auth: AuthService,
    private Storage: AngularFireStorage
  ) {
    this.Auth.User.subscribe((user) => {
      if (user) {
        this.User = user;
      }
    });
  }
  getCart() {
    return this.fs
      .collection("users")
      .doc("cvO4KpQ18x5IbUUcA3D4")
      .collection("cart")
      .snapshotChanges();
  }
  delCart(id: any) {
    return this.fs
      .collection("users")
      .doc("cvO4KpQ18x5IbUUcA3D4")
      .collection("cart")
      .doc(id)
      .delete();
  }
  getFav() {
    return this.fs
      .collection("users")
      .doc("cvO4KpQ18x5IbUUcA3D4")
      .collection("Fav")
      .snapshotChanges();
  }
  delFav(id: any) {
    return this.fs
      .collection("users")
      .doc("cvO4KpQ18x5IbUUcA3D4")
      .collection("Fav")
      .doc(id)
      .delete();
  }
  getUsers() {
    return this.fs.collection("users").valueChanges();
  }
  addCart(data) {
    return this.fs
      .collection("users")
      .doc("cvO4KpQ18x5IbUUcA3D4")
      .collection("cart")
      .add(data)
      .catch((err) => console.log(err));
  }
  addFav(data) {
    return this.fs
      .collection("users")
      .doc("cvO4KpQ18x5IbUUcA3D4")
      .collection("Fav")
      .add(data)
      .catch((err) => console.log(err));
  }
  updateCart(id, data) {
    return this.fs
      .collection("users")
      .doc("cvO4KpQ18x5IbUUcA3D4")
      .collection("cart")
      .doc(id)
      .update(data);
  }

  getProducts() {
    return this.fs.collection("products").snapshotChanges();
  }
  AddProducts(title: string, price: number, image: File) {
    return new Promise((resolve) => {
      let ref = this.Storage.ref("ProductsImages/" + image.name);
      ref.put(image).then((data) => {
        console.log("data from image", data);
        ref.getDownloadURL().subscribe((image) => {
          console.log(image);

          this.fs
            .collection("products")
            .add({
              title,
              price,
              image,
            })
            .then(() => {
              resolve();
            });
        });
      });
    });
  }
  updateProducts(id, data) {
    return this.fs.collection("products").doc(id).update(data);
  }
  delProduct(id) {
    return this.fs.collection("products").doc(id).delete();
  }
}
