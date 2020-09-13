import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Observable, from } from "rxjs";
import { finalize, switchMap, tap, mergeMap } from "rxjs/operators";
import { AngularFireStorage } from "@angular/fire/storage";
import { ProductsService } from "src/app/products.service";
import { NgForm } from "@angular/forms";
import { Route } from "@angular/compiler/src/core";
import { Router } from "@angular/router";
import { relative } from "path";

@Component({
  selector: "app-addProduct",
  templateUrl: "./addProduct.component.html",
  styleUrls: ["./addProduct.component.css"],
})
export class AddProductComponent implements OnInit {
  constructor(
    private storage: AngularFireStorage,
    private Products: ProductsService,
    private router: Router
  ) {}
  // @ViewChild('userPhoto') img:ElementRef;
  @ViewChild("userPhoto", { static: false }) image: ElementRef;
  ngOnInit() {}
  onFileSelected(event: Event) {}
  onSubmit(t, p, f: NgForm) {
    let img = (this.image.nativeElement as HTMLInputElement).files[0];
    console.log(img);
    this.Products.AddProducts(t.value, p.value, img).then((data) => {
      f.reset();
      console.log(" Data From Form", data);
      this.router.navigate(["/dashboard/products"]);
    });
  }
}
