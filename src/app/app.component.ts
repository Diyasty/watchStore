import { Component } from "@angular/core";
import { slideInOutAnimation } from "./Animations/animations";
import { ProductsService } from "./Services/products.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [slideInOutAnimation],
})
export class AppComponent {
  show;
  constructor(private Pro: ProductsService) {
    this.Pro.getProducts().subscribe((data) => (this.show = data));
  }
}
