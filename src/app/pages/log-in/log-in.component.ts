import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../Services/auth.service";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.scss"],
})
export class LogInComponent implements OnInit {
  constructor(private afAuth: AuthService, private r: Router) {}

  ngOnInit() {}
  validatingForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  ShowPassword = false;
  message;
  isLoading = false;

  onSubmit(form: any) {
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;
    this.afAuth
      .logIN(email, password)
      .then((data) => {
        this.isLoading = false;
        form.reset();
        this.r.navigate(["/"]);
      })
      .catch((err) => {
        console.log(err.message);
        this.message = err.message;
        this.isLoading = false;
        this.r.navigate(["login"]);
      });
  }
}
