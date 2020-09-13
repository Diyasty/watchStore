import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/products.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  constructor(private Users: ProductsService) {}
  users;
  ngOnInit() {
    this.Users.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
