import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/products.service";

@Component({
  selector: "app-best-products",
  templateUrl: "./best-products.component.html",
  styleUrls: ["./best-products.component.scss"],
})
export class BestProductsComponent implements OnInit {
  Products2: any[];
  constructor(private ProductSer: ProductsService) {}
  Products1;
  ngOnInit() {
    this.ProductSer.getProducts().subscribe((data) => {
      this.Products1 = data.slice(0, 4).map((item: any) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        };
      });
    });
    this.ProductSer.getProducts().subscribe((data) => {
      this.Products2 = data.slice(4, 8).map((item: any) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        };
      });
    });
  }
}
