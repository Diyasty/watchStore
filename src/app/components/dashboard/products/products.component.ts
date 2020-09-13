import { Component, OnInit, ViewChild } from "@angular/core";
import { ProductsService } from "src/app/products.service";
import { AngularFireStorage } from "@angular/fire/storage";

import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  // selectedFile: File = null;
  // fb;
  // downloadURL: Observable<string>;
  @ViewChild("newPrice", { static: false }) NewPrice: HTMLInputElement;

  constructor(
    private ProductSer: ProductsService,
    private storage: AngularFireStorage
  ) {}
  Products;
  ngOnInit() {
    this.ProductSer.getProducts().subscribe((items) => {
      this.Products = items.map((item: any) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        };
      });
    });
  }
  data: any;
  ProductId: string;
  updateProducts(id) {
    let product = this.Products.find((item) => {
      return item.id === id;
    });
    this.data = product;
    // if (this.NewPrice.value) {
    //   return (this.data.price = +this.data.price - +this.NewPrice.value);
    // }
    this.ProductSer.updateProducts(product.id, this.data)
      .then(() => {
        console.log("done from here", id);
      })
      .finally(() => {})
      .catch((err) => console.log(err));
  }
  delateProducts(id) {
    let product = this.Products.find((item) => {
      return item.id === id;
    });
    this.ProductSer.delProduct(id).then(() => {
      console.log("deleted ", id);
    });
  }
}
