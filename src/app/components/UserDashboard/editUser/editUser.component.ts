import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/Services/auth.service";
import { ProductsService } from "src/app/products.service";

@Component({
  selector: "app-editUser",
  templateUrl: "./editUser.component.html",
  styleUrls: ["./editUser.component.css"],
})
export class EditUserComponent implements OnInit {
  constructor(private UserProduct: ProductsService) {}
  User: {};
  email;
  fristName;
  lastName;
  userName;
  address = " الجننية - منية النصر - الدقهلية  ";
  phone = "01090046219";
  ngOnInit() {
    this.UserProduct.getUsers().subscribe((user: any) => {
      this.userName = user[0].userName;
      this.email = user[0].email;
      this.lastName = user[0].lastName;
      this.fristName = user[0].fristName;
    });
  }
}
