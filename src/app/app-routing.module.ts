import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from "./pages/cart/cart.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from ".//pages/about/about.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { LogInComponent } from "./pages/log-in/log-in.component";
import { ProductComponent } from "./layout/category/product/product.component";
import { CheckoutComponent } from "./pages/checkout/checkout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FavComponent } from ".//pages/fav/fav.component";
import { OrdersComponent } from "./dashboard/orders/orders.component";
import { UsersComponent } from "./dashboard/users/users.component";
import { ProductsComponent } from "./dashboard/products/products.component";
import { AddProductComponent } from "./dashboard/products/addProduct/addProduct.component";
import { UserDashboardComponent } from "./dashboard/UserDashboard/UserDashboard.component";
import { EditUserComponent } from "./dashboard/UserDashboard/editUser/editUser.component";
import { UserOrdersComponent } from "./dashboard/UserDashboard/UserOrders/UserOrders.component";
import { FavUserComponent } from "./dashboard/UserDashboard/FavUser/FavUser.component";

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
