import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ProductsService } from "src/app/products.service";
import { ProductComponent } from "./product/product.component";
import { AngularFirestore } from "@angular/fire/firestore";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit, AfterViewInit {
  id: any;
  Product: any;
  constructor(
    private pro: ProductsService,
    private fs: AngularFirestore,
    private tost: ToastrService,
    private route: ActivatedRoute
  ) {}
  isInCart: boolean;
  product: any;
  UserProducts: any[];
  cart: any;
  Products;
  Users;
  stars = [1, 2, 3, 4, 5];
  rating = 0;
  hoverState = 0;

  enter(i) {
    this.hoverState = i;
  }

  leave() {
    this.hoverState = 0;
  }

  updateRating(i) {
    this.rating = i;
  }

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
      this.id = data.id;
      this.pro.getProducts().subscribe((data) => {
        this.Products = data.map((item: any) => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data(),
          };
        });
      });
    });

    this.pro.getCart().subscribe((data) => {
      this.UserProducts = data.map((item: any) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        };
      });
    });
  }
  ngAfterViewInit() {}

  AddToCart(id) {
    let product = this.Products.find((item) => {
      return item.id === id;
    });
    let data = {
      ID: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      amount: 1,
    };
    // this.pro
    //   .addCart(data)
    //   .then(() => {})
    //   .catch((err) => console.log(err));
    let done = this.UserProducts.find((item) => item.price === product.price);
    if (!done) {
      this.pro
        .addCart(data)
        .then(() => {
          this.tost.success("تمت الاضافة الى السلة ", " تم", {
            timeOut: 3000,
          });
        })
        .catch((err) => console.log(err));
    } else {
      this.isInCart = true;
      this.tost.info("المنتج موجود مسبقا فى السلة", "لم تتم", {
        timeOut: 3000,
      });
    }

    // for (const it of this.UserProducts) {
    //   if (it.id === id) {
    //     console.log("done");
    //   } else {
    //     this.pro
    //       .addCart(data)
    //       .then(() => {})
    //       .catch((err) => console.log(err));
    //   }
    // }
    // var x = document.getElementById("toast");
    // x.className = "show";
    // setTimeout(function () {
    //   x.className = x.className.replace("show", "");
    // }, 5000);
  }
  AddToFav(id) {
    let product = this.Products.find((item) => {
      return item.id === id;
    });
    let data = {
      title: product.title,
      image: product.image,
      price: product.price,
    };
    // this.pro
    //   .addCart(data)
    //   .then(() => {})
    //   .catch((err) => console.log(err));
    let done = this.UserProducts.find((item) => item.id === product.id);
    if (!done) {
      this.pro
        .addFav(data)
        .then(() => {
          this.tost.success("تمت الاضافة الى السلة ", " تم", {
            timeOut: 3000,
          });
        })
        .catch((err) => console.log(err));
    } else {
      this.isInCart = true;
      this.tost.info("المنتج موجود مسبقا فى السلة", "لم تتم", {
        timeOut: 3000,
      });
    }
  }
}
