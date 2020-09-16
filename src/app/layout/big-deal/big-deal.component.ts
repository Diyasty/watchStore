import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../Services/products.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-big-deal",
  templateUrl: "./big-deal.component.html",
  styleUrls: ["./big-deal.component.scss"],
})
export class BigDealComponent implements OnInit {
  Products: any;
  UserProducts: any;
  isInCart: boolean;
  id;
  Users: any[];
  constructor(private pro: ProductsService, private tost: ToastrService) {}

  ngOnInit() {
    this.pro.getProducts().subscribe((data) => {
      this.Products = data.map((item: any) => {
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
  }
  AddToCart(id = "MI9Xr8sWjraqEuScCzcN") {
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
      this.isInCart = true;
      this.tost.info("المنتج موجود مسبقا فى السلة", "لم تتم", {
        timeOut: 3000,
      });
    }
  }
  // AddToCart() {
  //   let product = this.Products.find((item) => {
  //     return item.id === id;
  //   });
  //   let data = {
  //     ID: product.id,
  //     title: product.title,
  //     image: product.image,
  //     price: product.price,
  //     amount: 1,
  //   };
  //   // this.pro
  //   //   .addCart(data)
  //   //   .then(() => {})
  //   //   .catch((err) => console.log(err));
  //   let done = this.UserProducts.find((item) => item.price === product.price);
  //   if (!done) {
  //     this.pro
  //       .addCart(data)
  //       .then(() => {})
  //       .catch((err) => console.log(err));
  //   } else {
  //     console.log("not object");
  //     this.isInCart = true;
  //   }
  //   var x = document.getElementById("toastx");
  //   x.className = "show";
  //   setTimeout(function () {
  //     x.className = x.className.replace("show", "");
  //   }, 2000);
}
