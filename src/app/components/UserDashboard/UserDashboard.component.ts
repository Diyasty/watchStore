import { Component, OnInit, HostBinding } from "@angular/core";
import { slideInAnimation } from "src/app/RouterAnimations";
import { slideInOutAnimation, fadeInAnimation } from "src/app/animations";

@Component({
  selector: "app-UserDashboard",
  templateUrl: "./UserDashboard.component.html",
  styleUrls: ["./UserDashboard.component.css"],
  animations: [slideInAnimation, slideInOutAnimation, fadeInAnimation],
})
export class UserDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
