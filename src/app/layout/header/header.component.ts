import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/products.service";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/Services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(
    private as: AuthService,
    private router: Router,
    private pro: ProductsService
  ) {}
  products;
  Fav;
  isLoading = false;
  ngOnInit() {
    this.sub = this.as.User.subscribe((user) => {
      if (user && user.email === "test@test.com") {
        this.isAuth = true;
      } else if (user && user.email === "admin@admin.com") {
        this.isAuth = true;
        this.isAdmin = true;
      } else {
        this.isAuth = false;
      }
    });
    this.pro.getCart().subscribe((data) => {
      this.products = data.map((item: any) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        };
      });
    });
    this.pro.getFav().subscribe((data) => {
      this.Fav = data.map((item: any) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        };
      });
    });
  }
  isAuth: boolean = false;
  sub: Subscription;
  isAdmin: boolean = false;

  expression = true;
  logOut() {
    this.router.navigate(["/login"]);
    this.as.logOut();
  }
}
