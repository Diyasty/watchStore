import { Component, OnInit, HostBinding } from "@angular/core";
import { slideInAnimation } from "../../Animations/RouterAnimations";
import { slideInOutAnimation, fadeInAnimation } from "../../Animations/animations";

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
