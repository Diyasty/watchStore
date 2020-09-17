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
import { CartComponent } from "./pages/cart/cart.component";
import { HomeComponent } from "./pages/home/home.component";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AboutComponent } from "./pages/about/about.component";
import { AngularFirestore } from "@angular/fire/firestore";
import { SignupComponent } from "./pages/signup/signup.component";
import { LoadingSpinnerComponent } from "./components/spinner/loading-spinner.component";
import { LogInComponent } from "./pages/log-in/log-in.component";
import { AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth";
import { ProductComponent } from "./layout/category/product/product.component";
import { StarsComponent } from "./components/stars/stars.component";
import { CheckoutComponent } from "./pages/checkout/checkout.component";
import { ToastrModule } from "ngx-toastr";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FavComponent } from "./pages/fav/fav.component";
import { OrdersComponent } from "./dashboard/orders/orders.component";
import { UsersComponent } from "./dashboard/users/users.component";
import { ProductsComponent } from "./dashboard/products/products.component";
import { AddProductComponent } from "./dashboard/products/addProduct/addProduct.component";

import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ReviewsComponent } from "./layout/category/product/reviews/reviews.component";
import { ProductDesComponent } from "./layout/category/product/product-des/product-des.component";
import { UserDashboardComponent } from "./dashboard/UserDashboard/UserDashboard.component";
import { EditUserComponent } from "./dashboard/UserDashboard/editUser/editUser.component";
import { UserOrdersComponent } from "./dashboard/UserDashboard/UserOrders/UserOrders.component";
import { FavUserComponent } from "./dashboard/UserDashboard/FavUser/FavUser.component";
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';

// Bootstrap

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

    AngularFireModule.initializeApp(environment.firebase),
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
