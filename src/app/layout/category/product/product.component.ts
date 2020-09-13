import { Component, OnInit, ViewChild } from "@angular/core";
import { ProductsService } from "src/app/products.service";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  Product;
  FavProducts: any;
  id;
  UserProducts: any;
  isInCart: boolean;
  Users;
  isInFav;
  UserFav;
  vote;
  info;
  des = true;
  @ViewChild("in", { static: false }) InfoBtn: HTMLElement;
  Products: any;
  constructor(
    private productSer: ProductsService,
    private route: ActivatedRoute,
    private tost: ToastrService
  ) {}
  ngOnInit() {
    console.log(this.id);

    //
    this.route.params.subscribe((data: any) => {
      this.id = data.id;
      this.productSer.getProducts().subscribe((data) => {
        this.Products = data.map((item: any) => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data(),
          };
        });
        this.FavProducts = data.slice(0, 3).map((item: any) => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data(),
          };
        });
        this.Product = this.Products.find((item) => {
          return item.id === this.id;
        });
        console.log("Product =>", this.Product);
      });
    });

    this.productSer.getCart().subscribe((data) => {
      this.UserProducts = data.map((item: any) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        };
      });
    });
    this.productSer.getFav().subscribe((data) => {
      this.UserFav = data.map((item: any) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        };
      });
      console.log(this.UserFav);
    });
    this.productSer.getUsers().subscribe((data) => {
      this.Users = data;
    });
  }
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
  AddToCart(id, ic) {
    console.log(id);

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
      this.productSer
        .addCart(data)
        .then(() => {
          ic.style.color = "rgb(230, 9, 145)";
          this.tost.success("تمت الاضافة الى السلة ", " تم", {
            timeOut: 3000,
          });
        })
        .catch((err) => console.log(err));
    } else {
      ic.style.color = "rgb(230, 9, 145)";
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
    console.log(done);

    if (!done) {
      this.productSer
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
  showVote() {
    this.vote = true;
    this.des = false;
    this.info = false;
  }
  showDes() {
    this.vote = false;
    this.des = true;
    this.info = false;
  }
  showInfo() {
    this.info = true;
    this.vote = false;
    this.des = false;
  }
}
