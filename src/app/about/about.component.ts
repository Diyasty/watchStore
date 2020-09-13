import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  constructor(
    private fs: ProductsService,
    private firestore: AngularFirestore
  ) {}
  ngOnInit() {}
}
