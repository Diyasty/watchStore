import { Component, OnInit, ElementRef } from "@angular/core";
import { ProductsService } from "../../Services/products.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.scss"],
})
export class ShopComponent implements OnInit {
  UserProducts: any;
  isInCart: boolean;
  Users;
  isInFav;
  UserFav;
  constructor(private pro: ProductsService, private tost: ToastrService) {}
  Products;
  ngOnInit() {
    this.pro.getProducts().subscribe((data) => {
      this.Products = data.slice(0, 3).map((item: any) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        };
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
    this.pro.getFav().subscribe((data) => {
      this.UserFav = data.map((item: any) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        };
      });
    });
  }
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
      this.tost.info("المنتج موجود مسبقا فى السلة", "لم تتم", {
        timeOut: 3000,
      });
    }
  }
  AddToFav(id, fc: HTMLElement) {
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
    let done = this.UserFav.find((item) => item.image === product.image);
    if (!done) {
      this.pro
        .addFav(data)
        .then(() => {
          fc.style.color = "rgb(230, 9, 145)";
          this.tost.success("تمت الاضافة الى المفضلة  ", " تم", {
            timeOut: 3000,
          });
        })
        .catch((err) => console.log(err));
    } else {
      this.isInFav = true;
      fc.style.color = "rgb(230, 9, 145)";
      this.tost.info("المنتج موجود مسبقا فى المفضلة ", "لم تتم", {
        timeOut: 3000,
      });
    }
  }
}
