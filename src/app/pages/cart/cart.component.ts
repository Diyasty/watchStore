import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductsService } from "../../Services/products.service";
import { AuthService } from "../../Services/auth.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit, OnDestroy {
  constructor(private pro: ProductsService, private User: AuthService) {}
  id: any;
  user: any;
  UserProducts;
  price;
  ngOnInit() {
    this.pro.getCart().subscribe((data) => {
      this.UserProducts = data.map((item: any) => {

        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        };
      });
    });
  }

  ngOnDestroy() {}
  delete(id) {
    this.pro.delCart(id).then(() => {
      console.log("deleted");
    });
  }
  change(id, e) {
    let product = this.UserProducts.find((item) => {
      return item.id === id;
    });
    let data = {
      amount: +e,
      newPrice: product.price * +e,
    };
    console.log(product.id);

    this.pro.updateCart(id, data).then(() => {
      console.log("done");
    });
  }
}
