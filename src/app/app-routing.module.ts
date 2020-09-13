import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from "./components/cart/cart.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { SignupComponent } from "./signup/signup.component";
import { LogInComponent } from "./log-in/log-in.component";
import { ProductComponent } from "./layout/category/product/product.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { FavComponent } from "./layout/fav/fav.component";
import { OrdersComponent } from "./components/dashboard/orders/orders.component";
import { UsersComponent } from "./components/dashboard/users/users.component";
import { ProductsComponent } from "./components/dashboard/products/products.component";
import { AddProductComponent } from "./components/dashboard/products/addProduct/addProduct.component";
import { UserDashboardComponent } from "./components/UserDashboard/UserDashboard.component";
import { EditUserComponent } from "./components/UserDashboard/editUser/editUser.component";
import { UserOrdersComponent } from "./components/UserDashboard/UserOrders/UserOrders.component";
import { FavUserComponent } from "./components/UserDashboard/FavUser/FavUser.component";

const routes: Routes = [
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "Fav",
    component: FavComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: OrdersComponent,
      },
      {
        path: "users",
        component: UsersComponent,
      },
      {
        path: "products",
        component: ProductsComponent,
      },
      {
        path: "addProduct",
        component: AddProductComponent,
      },
    ],
  },
  {
    path: "checkout",
    component: CheckoutComponent,
  },
  {
    path: "product/:id",
    component: ProductComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "profile/:id",
    component: UserDashboardComponent,
    children: [
      {
        path: "",
        component: EditUserComponent,
        data: { animation: "Contact" },
      },
      {
        path: "orders",
        component: UserOrdersComponent,
        data: { animation: "Home" },
      },
      {
        path: "fav",
        component: FavUserComponent,
        data: { animation: "About" },
      },
    ],
  },
  {
    path: "login",
    component: LogInComponent,
  },

  {
    path: "about",
    component: AboutComponent,
  },
  { path: "", component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      onSameUrlNavigation: "reload", // Add options right here
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
