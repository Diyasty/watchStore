import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; // <== add the imports!

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BannersComponent } from "./layout/banners/banners.component"

import { HeaderComponent } from "./layout/header/header.component";
import { BestProductsComponent } from "./layout/best-products/best-products.component";
import { BigDealComponent } from "./layout/big-deal/big-deal.component";
import { ShopComponent } from "./layout/shop/shop.component";
import { FeaturesComponent } from "./layout/features/features.component";
import { CategoryComponent } from "./layout/category/category.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { CartComponent } from "./components/cart/cart.component";
import { HomeComponent } from "./home/home.component";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AboutComponent } from "./about/about.component";
import { AngularFirestore } from "@angular/fire/firestore";
import { SignupComponent } from "./signup/signup.component";
import { LoadingSpinnerComponent } from "./ui/loading-spinner.component";
import { LogInComponent } from "./log-in/log-in.component";
import { AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth";
import { ProductComponent } from "./layout/category/product/product.component";
import { StarsComponent } from "./stars/stars.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { ToastrModule } from "ngx-toastr";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { FavComponent } from "./layout/fav/fav.component";
import { OrdersComponent } from "./components/dashboard/orders/orders.component";
import { UsersComponent } from "./components/dashboard/users/users.component";
import { ProductsComponent } from "./components/dashboard/products/products.component";
import { AddProductComponent } from "./components/dashboard/products/addProduct/addProduct.component";

import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ReviewsComponent } from "./layout/category/product/reviews/reviews.component";
import { ProductDesComponent } from "./layout/category/product/product-des/product-des.component";
import { UserDashboardComponent } from "./components/UserDashboard/UserDashboard.component";
import { EditUserComponent } from "./components/UserDashboard/editUser/editUser.component";
import { UserOrdersComponent } from "./components/UserDashboard/UserOrders/UserOrders.component";
import { FavUserComponent } from "./components/UserDashboard/FavUser/FavUser.component";
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';

// Bootstrap
export const firebase = {
  apiKey: "AIzaSyAcuLmYjW5uA3VggZ3NuakTBzScyz2oeMg",
  authDomain: "maktabti-68c21.firebaseapp.com",
  databaseURL: "https://maktabti-68c21.firebaseio.com",
  projectId: "maktabti-68c21",
  storageBucket: "maktabti-68c21.appspot.com",
  messagingSenderId: "92395233535",
  appId: "1:92395233535:web:7c96c41a76b28bd28cecca",
  measurementId: "G-XJK8Z3DCGM",
}
@NgModule({
  declarations: [
    AppComponent,
    BannersComponent,
    HeaderComponent,
    BestProductsComponent,
    BigDealComponent,
    ShopComponent,
    FeaturesComponent,
    CategoryComponent,
    FooterComponent,
    CartComponent,
    HomeComponent,
    AboutComponent,
    SignupComponent,
    LoadingSpinnerComponent,
    LogInComponent,
    ProductComponent,
    StarsComponent,
    CheckoutComponent,
    DashboardComponent,
    EditUserComponent,
    FavComponent,
    FavUserComponent,
    UserOrdersComponent,
    OrdersComponent,
    UsersComponent,
    ProductsComponent,
    AddProductComponent,
    ReviewsComponent,
    ProductDesComponent,
    UserDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),

    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    AngularFireModule,
    AngularFirestore,
    AngularFireAuthModule,
    AngularFireAuth,
    AngularFireStorageModule,
    AngularFireStorage,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
