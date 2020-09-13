import { ProductsService } from "./../products.service";
import {
  Component,
  OnInit,
  AfterViewInit,
  AfterContentInit,
} from "@angular/core";
import { AuthService } from "../Services/auth.service";
import { fadeInAnimation } from ".././animations";

@Component({
  moduleId: module.id.toString(),
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],

  // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: { "[@fadeInAnimation]": "" },
})
export class HomeComponent implements OnInit, AfterContentInit {
  isUser = false;
  isLoading;
  constructor(private pro: ProductsService, private auth: AuthService) {
    auth.User.subscribe((user) => {
      if (user) {
        this.isUser = true;
      } else {
        this.isUser = false;
      }
    });
    this.isLoading = true;
  }
  ngAfterContentInit() {}
  Products: [] = [];
  ngOnInit() {
    this.isLoading = false;
    
    this.pro.getProducts().subscribe((data: any) => (this.Products = data));
  }
}
