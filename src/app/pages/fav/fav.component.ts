import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../Services/products.service";
import { AuthService } from "../../Services/auth.service";

@Component({
  selector: "app-fav",
  templateUrl: "./fav.component.html",
  styleUrls: ["./fav.component.scss"],
})
export class FavComponent implements OnInit {
  constructor(private pro: ProductsService, private User: AuthService) {}
  UserFav;
  ngOnInit() {
    this.pro.getFav().subscribe((data) => {
      this.UserFav = data.map((item: any) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        };
      });
    });
  }
  delete(id) {
    this.pro.delFav(id).then(() => {
      console.log("deleted");
    });
  }
}
